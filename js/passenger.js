$(document).ready(function() {

  buildPassengerForm()

})

var buildPassengerForm = function() {

  showPreferredContactMethod()
  $("#datepicker").multiDatesPicker();

}

var showPreferredContactMethod = function() {

    var preferredContactMethod = $("#preferredContactMethod :selected").text()

    var email = '<label">Email address</label><input type="email" class="form-control"  placeholder="Enter email">'
    var tel = '<label">Phone Number</label><input type="tel" class="form-control" placeholder="Enter phone number">'

    if (preferredContactMethod === "Email") {
      $('#emailDiv').append(email)
      $('#telDiv').empty()
    } else {
      $('#telDiv').empty()
      $('#emailDiv').empty()
      $('#telDiv').append(tel)
    }

}
