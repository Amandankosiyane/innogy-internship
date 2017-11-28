module.exports = function(models) {

        const addNewPlumber = function(req, res, next) {
                // slotObj = {}
                var newPlumber = req.body
                models.plumberInfo.findOneAndUpdate({
                                        Name: newPlumber.Name,
                                        Password: newPlumber.Password,
                                        Contact: newPlumber.Contact
                                }, {
                                        Slot: newPlumber.Slot
                                },
                        function(err, newPlumberData) {
                                if (err) {
                                        return next(err)
                                } else if (!newPlumberData) {
                                        models.plumberInfo.create({
                                                Name: newPlumber.Name,
                                                Password: newPlumber.Password,
                                                Contact: newPlumber.Contact
                                        }, function(err, newPlumberData) {
                                                console.log(newPlumber.Name);
                                                console.log(newPlumber.Password);
                                                console.log(newPlumber.Contact);
                                                if (err) {
                                                        return next(err)
                                                }
                                        });
                                }
                                res.json({
                                        newPlumberData: newPlumberData
                                })
                        })
}
const plumberName = function(req, res, next) {
                      models.plumberInfo.find({}, function(err, foundPlumbers) {
                              if (err) {
                                      return next(err)
                              }
                              res.json(
                                      {foundPlumbers:foundPlumbers})
                      })
}
return {
        addNewPlumber,
        plumberName
}
}
