class jsonResponseHandler {
    constructor(response, context){                
        this.response = response;
        this.context = context;
    }

    displayMeal(){
        return `<div id="dash_box"> 
        <h3 class="meal_link">
        <a href=${this.context.url}/${this.response.id}/ingredients>${this.response.meal_type + '-' + this.response.description}</a>
        <ul id="ingredientList"> </ul> 
        </h3> 
        </div>`
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
        <p>notes: ${this.response.notes}</p>
        <a href="${this.context.url}" class="symptomShowHTML">See your triggers</a>`        
    }
}