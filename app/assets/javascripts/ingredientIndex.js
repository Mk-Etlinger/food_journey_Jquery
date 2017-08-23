$(document).ready(function() {
    $('.meal_link').on('click', 'a', function(event) {
            event.preventDefault()
            var ul = $(this).parent().find('ul')
            ul.html("")
            $.get(this.href, function(json) {
                let content = ''
                json.ingredients.forEach(function(ingredient) {
                    content += `<li>${ingredient.name}</li>`
                })
                ul.append(`${content}`)
            })           
        });
});
