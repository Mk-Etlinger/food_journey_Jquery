$(document).ready(function() {
    $(document).on('click','.newMeal', function(event) {
        event.preventDefault()
        var action = $(this).attr('href')
        $.get(action, function(response) {
                $('#mealForm').html(response)     
        })
    });
});