module.exports = function(models) {

        const addNewPlumber = function(req, res, next) {
                // slotObj = {}
                var newPlumber = req.body
                models.plumberInfo.create({
                        Name: newPlumber.Name,
                        Password: newPlumber.Password,
                        Contact: newPlumber.Contact,
                        Slot: newPlumber.Slot,
                        Days: newPlumber.Days
                }, function(err, newPlumberData) {
                        console.log(newPlumber.Name);
                        console.log(newPlumber.Password);
                        console.log(newPlumber.Contact);
                        if (err) {
                                return next(err)
                        }
                        res.json({
                                newPlumberData: newPlumberData
                        })
                });
        }
        const plumberName = function(req, res, next) {
                models.plumberInfo.find({}, function(err, foundPlumbers) {
                        if (err) {
                                return next(err)
                        }
                        res.json({
                                foundPlumbers: foundPlumbers
                        })
                })
        }

        const bookPlumber = function(req, res, next) {
                var plumber = req.body;
                // var slot = req.body.slot;
                var days = req.body.Days;
                // console.log(req.body.Days );
                var daysObj = {};

                if (!Array.isArray(days)) {
                        days = [days];
                }
                days.forEach(function(day) {
                        console.log(day);
                        if (daysObj[day] === undefined) {
                                daysObj[day] = true;
                        } 
                })
                models.plumberInfo.findOneAndUpdate({
                        Name: plumber.Name,
                        Password: plumber.Password,
                        Contact: plumber.Contact,
                        }, {
                                Slot: plumber.Slot,
                                Days: daysObj
                        },
                        function(err, plumberNames) {
                                console.log(plumberNames);
                                if (err) {
                                        return next(err)
                                }
                                res.json({
                                        plumberNames: plumberNames
                                })
                        })
        }
        return {
                addNewPlumber,
                plumberName,
                bookPlumber
        }
}
