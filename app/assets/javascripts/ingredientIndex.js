$(document).ready(function() {
    $('.meal_link').on('click', 'a', function(event) {
            event.preventDefault()
            var action = $(this).attr('href')
            var mealLink = $(this).parent()
            $.ajax(action, {
                context: mealLink,
                success: function(response) {
                    mealLink.append(`<p>${response}</p>`)
                }     
            })
        });
});