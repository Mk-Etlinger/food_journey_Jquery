$(document).ready(function() {
    $('.newMeal').on('click', function(event) {
        event.preventDefault()
        var action = $(this).attr('href')
        $.ajax(action, {
            success: function(response) {
                $('#mealForm').html(response)
            }     
        })
    });
});