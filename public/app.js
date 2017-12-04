$(document).ready(function(){
               var addDisplay = document.getElementById("showPlumberInfo");
               var table = document.getElementById("template").innerHTML;
               var theTemplate = Handlebars.compile(table);

               // Ajax call to display the plumbers available
               $.ajax({
                       url: '/api/plumber',
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

                      var table = document.getElementById("template").innerHTML;
                      var theTemplate = Handlebars.compile(table);
                      var day = document.querySelector("#day").value
                      var description = document.querySelector("#description").value
                      var slot = document.querySelector("#slot").value
                      var plumberId = e.target.value;

                      $.ajax({
                              url: '/api/plumber/booked/id/'+plumberId+'/days/'+day+'/slot/'+slot+'/description/'+description,
                              type: 'POST',
                              dataType: 'application/json',
                              data: {_id: plumberId,Days: day,Slot:slot,Description: description, },
                              success: function(data) {
                                      console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", data.results);
                              },
                              error: function(error) {
                                //       alert(error)
                              }
                      })
              });

//Ajax to register a plumber
$('#login').on('click', function() {
        alert('i am working')
        var showAlertMessage = document.getElementById("showMessage");
        var name = document.getElementById('addName').value.toLowerCase();
        var contact = document.getElementById('addContact').value;
        var location = document.getElementById('addLocation').value;
        var final = '';
           $('#days:checked').each(function(){
               var values = $(this).val();
               final += values;
           });
           alert(final);
        var slot = '';
           $('#slot:checked').each(function(){
               var values = $(this).val();
               slot += values;
           });
           alert(slot);
        $.ajax({
                type: "POST",
                url: "/api/plumber/",
                dataType: "json",
                data:{ Name:name,Contact: contact, location:location, Slot: slot, Days: final},
                success: function(data) {
                        console.log("=========================================", data.availablePlumber);
                },
                error: function(error) {
                }
        })
})

});
