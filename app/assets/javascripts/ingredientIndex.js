$(document).ready(function() {
    $(document).on('click', '.meal_link a', function(event) {
            event.preventDefault()
            var ul = $(this).parent().find('ul')
            $.get(this.href, function(json) {
                let data = new jsonResponseHandler(json.ingredients, this)
                ul.html(`${data.displayIngredientIndex()}`)
            })           
        });
});
