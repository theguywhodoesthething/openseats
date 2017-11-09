// $(document).ready(function() {
//
// });

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

var ajaxPostSession = function(session) {
    $.ajax({
        type: 'Post',
        url: 'app/event',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(session)
    }).done(function() {
        ajaxGetSessions();
    }).fail(function(xhr, status, error) {
        console.log(status + ": " + error)
    })
}
