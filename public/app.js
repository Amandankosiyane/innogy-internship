$(document).ready(function(){
        $("#seePlumbers").on("click", function(){
                location.href = "slots.html"
        })

        // Compiling the table
               var addDisplay = document.getElementById("showPlumberInfo");
               var table = document.getElementById("template").innerHTML;
               var theTemplate = Handlebars.compile(table);

               // Ajax call to display the data from the database
               $.ajax({
                       url: '/api/availablePlumber',
                       type: 'GET',
                       success: function(data) {
                               console.log("===================", data.currentDay),
                               addDisplay.innerHTML = theTemplate({
                                       mon: data.currentDay
                                //        tue: data.currentDay,
                                //        wed: data.currentDay,
                                //        thur: data.currentDay,
                                //        fri: data.currentDay,
                                //        sat: data.currentDay,
                                //        sun: data.currentDay

                               })

                       },
                       error: function(error) {
                               // alert('Stock loading error');
                       }
               });

$('#login').on('click', function() {
        alert('i am working')
        // location.href = "slots.html";
        var days = document.querySelector("#days").value
        var slot = document.querySelector("#slot").value
        var showAlertMessage = document.getElementById("showMessage");
        var name = document.getElementById('addName').value.toLowerCase();
        var contact = document.getElementById('addContact').value;
        if (name == null || name.length == 0 && contact == null || contact.length == 0 && slot == null || slot.length == 0 && days == null || days.length == 0) {
                showAlertMessage.innerHTML = "These fields must not be empty"
                return false;
        }

        $.ajax({
                type: "POST",
                url: "/api/plumber/",
                dataType: "json",
                data:{ Name:name,Contact: contact, Slot: slot, Days: days},
                success: function(data) {
                        console.log("=========================================", data.availablePlumber);
                },
                error: function(error) {
                }
        })
})

// $("#submit").on("click", function() {
 //        var days = document.querySelector("#days")
 //        var slot = document.querySelector("#slot")
 //
 //        var saveData = {};
 // saveData.Slot = slot;
 // saveData.Days = days;
 //
 //
 // $.ajax({
 //     type: "POST",
 //     url: "/api/plumber/slot/"+slot+"/days/"+days,
 //     data: JSON.stringify(saveData),
 //     contentType: "application/json; charset=utf-8",
 //     dataType: "json",
 //     success: function(msg) {
 //         alert(msg.d);
 //     },
 //     error: function(msg) {
 //     alert('error');
 //     }
 //
 // });
//         alert("I am working")
//
//         var data = $('form').serialize();
//
//         $.ajax({
//                 type: "POST",
//                 url: "/api/plumber/slot/"+slot+"/days/"+days,
//                 dataType: "json",
//                 data: {Name: name, Slot: slot, Days: days},
//                 success: function(data) {
//                         alert(data);
//                 },
//                 error: function(error) {
//                         alert(error)
//                 }
//         })
// })
});
