$(document).ready(function() {
    $('#mealForm').on('submit', 'form', function(event) {
        event.preventDefault()
        $.post(this.action, $(this).serialize(), function(meal) {
            let data = new jsonResponseHandler(meal, this)
            $('#mealForm').html('<p>You successfully created a new meal!</p>')
            $('#dash_box').before('<div id="dash_box"> <h3 class="meal_link">' +
                    data.displayMealUrl() +
                    '<ul id="ingredientList"> </ul </h3> </div>')            
        })
    });
});