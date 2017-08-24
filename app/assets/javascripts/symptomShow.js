$(document).ready(function() {
    $('.symptom_link').on('click', 'a', function(event) {
        event.preventDefault()
        let reactionDiv = $(this).closest('#dash_box').find('#reactionDetails')
        $.get(this.href, function(reaction) {
            var reactionDetails = `<p>severity: ${reaction.severity}</p>
            <p>stress_level: ${reaction.stress_level}</p>
            <p>notes: ${reaction.notes}</p>`
            reactionDiv.html(`${reactionDetails}`)        
        })
    });
});