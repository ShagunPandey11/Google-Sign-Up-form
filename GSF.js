$(function(){
    $('.input-field').focusout(function(){
        var inputvalue=$(this).val();
        if(inputvalue===""){
            $(this).removeClass('has-value');
        }
        else{
            $(this).addClass('has-value');
        }
    })
    
});