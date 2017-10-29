// $(document).ready(function() {
//
// });

var showPreferredContactMethod = function() {

    var preferredContactMethod = $("#preferredContactMethod :selected").text()

    console.log(preferredContactMethod)
    console.log(preferredContactMethod === "Email")

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
