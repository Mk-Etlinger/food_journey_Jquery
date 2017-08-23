$(document).ready(function() {
    $('.symptom_link').on('click', 'a', function(event) {
            event.preventDefault()
            var action = $(this).attr('href')
            var symptomLink = $(this).parent()
            $.ajax(action, {
                context: symptomLink,
                success: function(response) {
                    symptomLink.append(`<p>${response}</p>`)
                }     
            })
        });
});