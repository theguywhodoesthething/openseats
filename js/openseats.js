$(document).ready(function() {

})

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
