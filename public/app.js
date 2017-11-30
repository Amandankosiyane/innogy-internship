$(document).ready(function(){
$('#login').on('click', function() {
        location.href = "slots.html";

        var showAlertMessage = document.getElementById("showMessage");
        var name = document.getElementById('addName').value.toLowerCase();
        var password = document.getElementById('addPassword').value;
        var contact = document.getElementById('addContact').value;
        // var monday = document.getElementById('monday').value;
        // var tuesday = document.getElementById('tuesday').value;
        // var morning = document.getElementById("morning").value;
        if (name == null || name.length == 0 && password == null || password.length == 0 && contact == null || contact.length == 0) {
                showAlertMessage.innerHTML = "These fields must not be empty"
                return false;
        }
        var addDetails = {
                Name: name,
                Password: password,
                Contact: contact,
                // Slot: morning.value,
                // Days: monday,
                // Days: monday,tuesday,
        }
        console.log(addDetails);
        $.ajax({
                type: "POST",
                url: 'http://localhost:3500/api/plumber/',
                dataType: "json",
                data: addDetails,
                success: function(data) {
                        console.log(data);
                },
                error: function(error) {
                }
        })
})

$("#submit").on("click", function() {
        alert("I am working")
        var monday = document.getElementById('monday').value;
        var tuesday = document.getElementById('tuesday').value;
        var wednesday = document.getElementById('wednesday').value;
        var thursday = document.getElementById('thursday').value;
        var friday = document.getElementById('friday').value;
        var saturday = document.getElementById('saturday').value;
        var sunday = document.getElementById('sunday').value;

        var morning = document.getElementById("morning").value
        var midday = document.getElementById("midday").value
        var afternoon = document.getElementById("afternoon").value

         var availability =  {
                 Slot : [morning, midday, afternoon] ,
                Days : { monday,tuesday,wednesday,thursday,friday,saturday,sunday}
        };

        $.ajax({
                type: "POST",
                url: "/api/plumber/slot",
                dataType: "json",
                data: availability,
                success: function(data) {
                        alert(data.availablePlumber);
                        // console.log("===============================================", data.);
                },
                error: function(error) {
                        alert(error)
                }
        })
})
});
