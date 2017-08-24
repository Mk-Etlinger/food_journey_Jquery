$(document).ready(function() {
    $('.symptom_link').on('click', 'a', function(event) {
        event.preventDefault()
        let reactionDiv = $(this).closest('#dash_box').find('#reactionDetails')
        $.get(this.href, function(reaction) {
            let displayText = new jsonResponseHandler(reaction, this)
            reactionDiv.html(displayText.displaySymptomDetails())        
        })
    });
});