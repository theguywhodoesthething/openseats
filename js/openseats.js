// $(document).ready(function() {
//
// });

var showPreferredContactMethod = function() {

    var preferredContactMethod = $("#preferredContactMethod :selected").text()

    console.log(preferredContactMethod)

    var passengerEmail = '<label for="passengerEmail">Email address</label><input type="email" class="form-control"  placeholder="Enter email">'
    var passengerTel = '<label for="passengerTel">Phone Number</label><input type="tel" class="form-control" placeholder="Enter phone number">'

    if (preferredContactMethod === "Email") {
      $('#emailDiv').append(passengerEmail)
      $('#telDiv').empty()
    } else {
      $('#telDiv').empty()
      $('#emailDiv').empty()
      $('#telDiv').append(passengerTel)
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
