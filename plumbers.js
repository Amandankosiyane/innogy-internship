module.exports = function(models) {


        const waiterAccess = function(req, res, next) {

                       var firstLetter = req.params.username.substring(0, 1);
                       var uppercase = req.params.username.substring(0, 1).toUpperCase()
                       var username = req.params.username.replace(firstLetter, uppercase);
                       var contact = req.params.contact
                       var days = req.body.day
                       models.plumberInfo.findOne({
                                       Name: username,
                                       Contact: contact
                               },
                               function(err, results) {
                                //        console.log(results);
                                       if (err) {
                                               return next(err)
                                       } else {
                                               if (results) {
                                                       var data = {
                                                               Name: results.Name,
                                                               Contact: results.Contact
                                                       }
                                                       res.json({data:data})
                                               }
                                       }
                                       if (!results) {
                                               models.plumberInfo.create({
                                                       Name: username,
                                                       Contact: contact
                                               }, function(err, results) {
                                                       if (err) {
                                                               return next(err)
                                                       }
                                                       res.json({results:results})
                                               })
                                       }
                               })
               }

               const book = function(req,res,next){
                       models.plumberInfo.findOne({
                               Name:req.body.Name,
                               Contact: req.body.Contact,
                               Slot: req.body.Slot,
                               Days: req.body.Days
                       }, function(err, availablePlumber){
                               if (err) {
                                       return next(err)
                               }else {
                                       if (availablePlumber) {
                                               var availablePlumber = {
                                                       Name: availablePlumber.Name,
                                                       Contact: availablePlumber.Contact,
                                                       Slot: availablePlumber.Slot,
                                                       Days: availablePlumber.Days
                                               }
                                               res.json({availablePlumber:availablePlumber})
                                       }
                               }if (!availablePlumber) {
                                    models.plumberInfo.create({
                                                    Name:req.body.Name,
                                                    Contact: req.body.Contact,
                                                    Slot: req.body.Slot,
                                                    Days: req.body.Days
                                                    },
                                                    function(err, availablePlumber) {
                                                            console.log(availablePlumber);
                                                            if (err) {
                                                                    return next(err)
                                                            }
                                                            res.json({
                                                                    availablePlumber: availablePlumber
                                                            })
                                                    })
                                                    }
                                            })
               }


               const availablePlumbers = function(req, res, next) {
                          var Monday = [];
                              models.plumberInfo.find({}, function(err, allPlumbers) {
                                      if (err) {
                                              return next(err)
                                      } else {
                                              for (var i = 0; i < allPlumbers.length; i++) {
                                                      var details = {
                                                              Name: allPlumbers[i].Name,
                                                              Contact: allPlumbers[i].Contact,
                                                              Slot: allPlumbers[i].Slot,
                                                              Days: allPlumbers[i].Days
                                                      }
                                                      var currentDay = details;
                                                      console.log("loglogloglogloglogloglogloglgl", currentDay);
                                                              if (currentDay == undefined) {
                                                                      Monday.push(currentDay.details);
                                                              }

                                              }
                                      }
                                      res.json({currentDay:currentDay });
                                            console.log("lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll", currentDay);
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

        return {
                plumberName,
                book,
                availablePlumbers
        }
}
