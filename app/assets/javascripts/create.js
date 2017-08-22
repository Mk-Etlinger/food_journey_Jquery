$(document).ready(function() {
    $('#mealForm').on('submit', 'form', function(event) {
        event.preventDefault()
        var action = $(this).attr('action')
        $.ajax({
            method: 'POST',
            url: action,
            data: $(this).serialize(),
            success: function(response) {
                debugger;
            }     
        })
    });
});