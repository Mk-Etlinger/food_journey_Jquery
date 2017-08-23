$(document).ready(function() {
    $('#mealForm').on('submit', 'form', function(event) {
        event.preventDefault()
        $.post(this.action, $(this).serialize(), function(meal) {
            $('#mealForm').html('<p>You successfully created a new meal!</p>')
            $('#dash_box').before(`<div id="dash_box">
                <h3 class="meal_link">
                    <a href=${this.url}/${meal.id}>${meal.meal_type + '-' + meal.description}</a>
                    <ul id="ingredientList"></ul
                </h3>
            </div>`)
            
        })
    });
});