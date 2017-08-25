$(document).ready(function() {
    $('#mealForm').on('submit', '#new_meal', function(event) {
        event.preventDefault()
        $.post(this.action, $(this).serialize(), function(meal) {
            let data = new jsonResponseHandler(meal, this)
            $('#mealForm').html('<p>You successfully created a new meal!</p><a class="newMeal" href="/meals/new">Add a meal</a>')
            $('#dash_box').before(data.displayMeal())            
        })
    });
});