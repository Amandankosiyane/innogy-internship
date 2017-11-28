$('#login').on('click', function() {
              var showAlertMessage = document.getElementById("showMessage");
              var name = document.getElementById('addName').value.toUpperCase();
              var password = document.getElementById('addPassword').value;
              var contact = document.getElementById('addContact').value;
              if (name == null || name.length == 0 && password == null || password.length == 0 && contact == null || contact.length == 0) {
                      showAlertMessage.innerHTML = "These fields must not be empty"
                      return false;
              }
        //       var addDisplay = document.getElementById("showInfo");

              var addDetails = {
                      Name: name,
                      Password: password,
                      Contact: contact
              }
              console.log(addDetails);
              $.ajax({
                      type: "POST",
                      url: 'http://localhost:3500/api/plumber/',
                      dataType: "json",
                      data: addDetails,
                      success: function(data) {
                              console.log(data);
                        //       addDisplay.innerHTML = theTemplate({
                        //               stock: addDetails
                        //       })
                      },
                      error: function(error) {
                              // alert('failed while adding stock');
                      }
              })
              name = "";
              password = "";
              contact = "";
      })
