$(document).ready(function(){
               var addDisplay = document.getElementById("showPlumberInfo");
               var table = document.getElementById("template").innerHTML;
               var theTemplate = Handlebars.compile(table);

               // Ajax call to display the plumbers available
               $.ajax({
                       url: 'https://tranquil-scrubland-72485.herokuapp.com/api/plumber',
                       type: 'GET',
                       success: function(data) {
                               console.log("***************************************************************************************======", data.foundPlumbers),
                               addDisplay.innerHTML = theTemplate({
                                       plumber: data.foundPlumbers

                               })

                       },
                       error: function(error) {
                               console.log(error);
                       }
               });

//Ajax call to book a plumber
        $('#showPlumberInfo').on('click', function(e) {
                var showAlertMessage = document.getElementById("showMessage");
                      var table = document.getElementById("template").innerHTML;
                      var theTemplate = Handlebars.compile(table);
                      var day = document.querySelector("#day").value
                      var description = document.querySelector("#description").value
                      var slot = document.querySelector("#slot").value
                      var plumberId = e.target.value;

                      $.ajax({
                              url: 'https://tranquil-scrubland-72485.herokuapp.com/api/plumber/booked/id/'+plumberId+'/days/'+day+'/slot/'+slot+'/description/'+description,
                              type: 'POST',
                              dataType: 'application/json',
                              data: {_id: plumberId,Days: day,Slot:slot,Description: description, },
                              success: function(data) {
showAlertMessage.innerHTML = "Successfully booked"                              },
                              error: function(error) {
                                //       alert(error)
                              }
                      })
              });

//Ajax to register a plumber
$('#login').on('click', function() {
        var showAlertMessage = document.getElementById("showMessage");
        var name = document.getElementById('addName').value.toLowerCase();
        var contact = document.getElementById('addContact').value;
        var location = document.getElementById('addLocation').value;
        var final = '';
           $('#days:checked').each(function(){
               var values = $(this).val();
               final += values;
           });
        var slot = '';
           $('#slot:checked').each(function(){
               var values = $(this).val();
               slot += values;
           });
        $.ajax({
                type: "POST",
                url: "https://tranquil-scrubland-72485.herokuapp.com/api/plumber/",
                dataType: "json",
                data:{ Name:name,Contact: contact, location:location, Slot: slot, Days: final},
                success: function(data) {
                        console.log("=========================================", data.availablePlumber);
                        showAlertMessage.innerHTML = "You successfully registered"
                },
                error: function(error) {
                }
        })
})

});
