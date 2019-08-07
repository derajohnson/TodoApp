//check off clicked todo
$('ul').on('click', 'li', function(){
$(this).toggleClass('completed');
})

//click on X to delete todo
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

//add todos
$('input[type="text"').on('keypress', function(event){
    if(event.which === 13){
        let todoText = $(this).val();
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(this).val('');
    }
})

//hide or show todo
$('.fa-plus').on('click', function(){
    $('input').fadeToggle()
})