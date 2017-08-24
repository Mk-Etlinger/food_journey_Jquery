class jsonResponseHandler {
    constructor(response, context){                
        this.response = response;
        this.context = context;
    }

    displayMealUrl(){
        return `<a href=${this.context.url}/${this.response.id}/ingredients>${this.response.meal_type + '-' + this.response.description}</a>`;
    }

    displayIngredientIndex(){
        // refactor to use map and join?
        let content = ''
        this.response.forEach(function(ingredient) {
            content += `<li>${ingredient.name}</li>`
        })
        return content;
    }

    displaySymptomDetails(){
         return `<p>severity: ${this.response.severity}</p>
        <p>stress_level: ${this.response.stress_level}</p>
        <p>notes: ${this.response.notes}</p>`
    }
}