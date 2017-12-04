"use strict";
const ObjectId = require("mongodb").ObjectId;
module.exports = function(models) {
               const addPlumber = function(req,res,next){
                       models.plumberInfo.findOne({
                               Name:req.body.Name
                       }, function(err, availablePlumber){
                               if (err) {
                                       return next(err)
                               }else {
                                       if (availablePlumber) {
                                               var availablePlumber = {
                                                       Name: availablePlumber.Name,
                                                       Contact: availablePlumber.Contact,
                                                     location: availablePlumber.location,
                                                     Slot: availablePlumber.Slot,
                                                     Days: availablePlumber.Days,
                                                     Description: availablePlumber.Description
                                               }
                                               res.json({availablePlumber:availablePlumber})
                                       }
                               }if (!availablePlumber) {
                                    models.plumberInfo.create({
                                                    Name:req.body.Name,
                                                    Contact: req.body.Contact,
                                                    location: req.body.location,
                                                    Slot: req.body.Slot,
                                                    Days: req.body.Days,
                                                    Description: req.body.Description
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

        const AllPlumbers = function(req, res, next) {
                models.plumberInfo.find({}, function(err, foundPlumbers) {
                        if (err) {
                                return next(err)
                        }
                        res.json({
                                foundPlumbers: foundPlumbers
                        })
                })
        }

        const bookAPlumber = function(req,res,next){
                var plumber = req.body;
                var _id = req.params._id;

                // var hiringData = {
                        // Days: req.params.Days,
                        // Slot: req.params.Slot

                models.plumberInfo.findOneAndUpdate({
                        _id: _id
                },{
                        $push: {
                                Days: req.params.day,
                                Slot: req.params.slot,
                                Description: req.params.description
},
                }, function(err, results){
                        if (err) {
                                return next(err)
                        }
                        models.plumberInfo.findOne({
                                _id: _id
                        }, function(err, results){
                                console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", results);
                                if (err) {
                                        return next(err)
                                }
                                res.json({results: results})
                        })
                })
        }

const bookedDays = function(req,res,next){
        var _id = req.params._id
        models.plumberInfo.findOne({
                _id: _id
        }, function(err,results){
                if (err) {
                        return next(err)
                }
                res.json({results:results})
        })

}

        return {
                AllPlumbers,
                addPlumber,
                availablePlumbers,
                bookAPlumber,
                bookedDays
        }
}
