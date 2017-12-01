$(document).ready(function(){
$('#login').on('click', function() {
        location.href = "slots.html";
        var showAlertMessage = document.getElementById("showMessage");
        var name = document.getElementById('addName').value.toLowerCase();
        var contact = document.getElementById('addContact').value;
        if (name == null || name.length == 0) {
                showAlertMessage.innerHTML = "These fields must not be empty"
                return false;
        }

        $.ajax({
                type: "POST",
                url: '/api/plumber/username/ '+name+'/contact/'+contact,
                dataType: "json",
                data:{ Name: name, Contact: contact },
                success: function(data) {
                        console.log(data);
                },
                error: function(error) {
                }
        })
})

$("#submit").on("click", function() {
        alert("I am working")

var days = document.querySelector("#days")
var slot = document.querySelector("#slot")
        var data = $('form').serialize();

        $.ajax({
                type: "POST",
                url: "/api/plumber/slot/"+slot+"/days/"+days,
                dataType: "json",
                data: {Name: name, Slot: slot, Days: days},
                success: function(data) {
                        alert(data);
                },
                error: function(error) {
                        alert(error)
                }
        })
})
});
