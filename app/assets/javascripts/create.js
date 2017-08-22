$(document).ready(function() {
    $('#mealForm').on('submit', 'form', function(event) {
        event.preventDefault()
        var action = $(this).attr('action')
        $.ajax({
            method: 'POST',
            url: action,
            data: $(this).serialize(),
            success: function(response) {
                $('form').hide()
                $('#mealForm').append('<p>You successfully created a new meal!</p>')
            }     
        })
    });
});