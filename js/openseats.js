$(document).ready(function() {

  //showPreferredContactMethod()
  // console.log("LOADED")

});

var showPreferredContactMethod = function() {

    var preferredContactMethod = document.getElementById("passengerContact").value;

    var $passengerEmail = '<label for="passengerEmail">Email address</label><input type="email" class="form-control"  placeholder="Enter email">'
    var $passengerTel = '<label for="passengerTel">Phone Number</label><input type="tel" class="form-control" placeholder="Enter phone number">'

    if (preferredContactMethod === "Email") {
      $('#passengerEmail').append($passengerEmail)
      $('#passengerTel').empty()
    } else {
      $('#passengerTel').empty()
      $('#passengerEmail').empty()
      $('#passengerTel').append($passengerTel)
    }

}

var buildPassengerForm = function() {

  // console.log("in buildPassengerForm")

    $('#buildPassengerBtn').addClass('active')
    $('#buildOwnerBtn').removeClass('active')
    $('#formDiv').empty();
    $('#formDiv').load('passenger.html')

}

var buildOwnerForm = function() {

  // console.log("in buildOwnerForm")

    $('#buildOwnerBtn').addClass('active')
    $('#buildPassengerBtn').removeClass('active')
    $('#formDiv').empty();
    $('#formDiv').load('owner.html')

}
