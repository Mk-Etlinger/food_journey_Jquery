$(document).ready(function() {
    $('.newMeal').on('click', function(event) {
        event.preventDefault()
        var action = $(this).attr('href')
        $.get(action, function(response) {
                $('#mealForm').html(response)     
        })
    });
});