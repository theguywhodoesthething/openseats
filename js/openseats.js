// $(document).ready(function() {
//
// });

var showPreferredContactMethod = function() {

    var $preferredContactMethod = $("#preferredContactMethod").value;

    console.log($preferredContactMethod)

    var passengerEmail = '<label for="passengerEmail">Email address</label><input type="email" class="form-control"  placeholder="Enter email">'
    var passengerTel = '<label for="passengerTel">Phone Number</label><input type="tel" class="form-control" placeholder="Enter phone number">'

    if ($preferredContactMethod === "Email") {
      $('#passengerEmail').append(passengerEmail)
      $('#passengerTel').empty()
    } else {
      $('#passengerTel').empty()
      $('#passengerEmail').empty()
      $('#passengerTel').append(passengerTel)
    }

}

var buildPassengerForm = function() {

    $('#buildPassengerBtn').addClass('active')
    $('#buildOwnerBtn').removeClass('active')
    $('#formDiv').empty();
    $('#formDiv').load('passenger.html', function(){
      showPreferredContactMethod()
      $( "#datepicker" ).multiDatesPicker();
    })
}

var buildOwnerForm = function() {

    $('#buildOwnerBtn').addClass('active')
    $('#buildPassengerBtn').removeClass('active')
    $('#formDiv').empty();
    $('#formDiv').load('owner.html', function(){
      showPreferredContactMethod()
      $( "#datepicker" ).multiDatesPicker();
    })
}
