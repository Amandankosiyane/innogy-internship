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
                       var slot = req.params.slot;
                       var days = req.params.days
                       var daysObj = {};
                            if (!Array.isArray(days)) {
                                    days = [days];
                            }
                            days.forEach(function(day) {
                                            console.log(day);
                                            if (daysObj[day] === undefined) {
                                                    daysObj[day] = true;
                                            }
                                    });

                                    models.plumberInfo.findOneAndUpdate({
                                                    Name:req.params.username
                                                    }, {
                                                            Slot: slot,
                                                            Days: daysObj
                                                    },
                                                    function(err, availablePlumber) {
                                                            console.log(availablePlumber);
                                                            if (err) {
                                                                    return next(err)
                                                            }
                                                            // console.log();
                                                            res.json({
                                                                    availablePlumber: availablePlumber
                                                            })
                                                    })
               }

               //
        //        const days = function(req, res, next) {
               //
        //                       var daysObject = {};
        //                       var firstLetter = req.params.username.substring(0, 1);
        //                       var uppercase = req.params.username.substring(0, 1).toUpperCase()
        //                       var username = req.params.username.replace(firstLetter, uppercase);
        //                       var days = req.body.Days;
        //                       console.log(days);
        //                       //
        //                 //       if (days === undefined) {
        //                 //               var message = username + ", Please select  days first"
        //                 //               res.render('days', {
        //                 //                       output: message
        //                 //               })
        //                 //               return
        //                 //       } else if (days.length < 3) {
        //                 //               var message = username + ", Please select 3 working days "
        //                 //               res.render('days', {
        //                 //                       output: message
        //                 //               })
        //                 //               return
        //                 //       } else if (days.length > 3) {
        //                 //               console.log(typeof(days) == 'object');
        //                 //               if (typeof(days) == 'object') {
        //                 //                       console.log('Loop');
        //                 //                       var message = username + ", You selected more days try to select  3 working days "
        //                 //               } else if (typeof(days) == 'string') {
        //                 //                       console.log('Loop 2');
        //                 //                       var message = username + ", Please select 3 working days "
        //                 //               }
        //                       //
        //                 //               res.render('days', {
        //                 //                       output: message
        //                 //               })
        //                 //       } else {
               //
        //                               if (!Array.isArray(days)) {
        //                                       days = [days]
        //                               }
               //
        //                               days.forEach(function(day) {
        //                                       daysObject[day] = true
               //
        //                               });
               //
        //                               console.log(daysObject);
        //                               console.log('========================');
               //
               //
        //                               models.plumberInfo.findOneAndUpdate({
        //                                       Name: username
        //                               }, {
        //                                       Slot: req.body.Slot
        //                                       Days: daysObject
        //                               }, {
        //                                       new: true,
        //                                       returnNewDocument: true
        //                               }, function(err, results) {
        //                                       console.log(results);
        //                                       console.log('========================');
        //                                       if (err) {
        //                                               return next(err)
        //                                       }
               //
        //                               });
        //                         //       req.flash('error', "Thank you, " + username + " shift updated.")
        //                               res.json({results:results});
        //                 //       }
        //               }




        const addNewPlumber = function(req, res, next) {
                models.plumberInfo.create({
                        Name: req.params.username
                }, function(err, newPlumberData) {
                        console.log(req.params.username);

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

        // const bookPlumber = function(req, res, next) {
        //
        //         // var username = req.session.username;
        //
        //         var plumber = req.body;
        //         var days = req.body.Days;
        //         console.log(req.body );
        //         var daysObj = {};
        //         if (!Array.isArray(days)) {
        //                 days = [days];
        //         }
        //
        //         days.forEach(function(day) {
        //                 console.log(day);
        //                 if (daysObj[day] === undefined) {
        //                         daysObj[day] = true;
        //                 }
        //         });
        //
        //         models.plumberInfo.findOneAndUpdate({
        //                 Name:req.params.username
        //                 // Password: plumber.Password,
        //                 // Contact: plumber.Contact,
        //                 }, {
        //                         Slot: plumber.Slot,
        //                         Days: daysObj
        //                 },
        //                 function(err, availablePlumber) {
        //                         console.log(availablePlumber);
        //                         if (err) {
        //                                 return next(err)
        //                         }
        //                         // console.log();
        //                         res.json({
        //                                 availablePlumber: availablePlumber
        //                         })
        //                 })
        // }
        return {
                waiterAccess,
                addNewPlumber,
                plumberName,
                book
                // bookPlumber,
                // days
        }
}
