$("form").each(function(){
    $("input").each(function(){
        if($(this).attr('placeholder')){

            if( ($(this).val() === "") || ($(this).val() === $(this).attr('placeholder')) ){
                $(this).val($(this).attr('placeholder'));
            }

            $(this).focus(function(){
                $(this).val("");
            });

            $(this).blur(function(){
                if($(this).val() === ""){
                    $(this).val($(this).attr('placeholder'));
                }
            });
        }
    });

    $(this).submit(function(){
        $("input").each(function(){
            if($(this).attr('placeholder')){
                if($(this).val() === $(this).attr('placeholder')){
                    $(this).val('');
                }
            }
        });
    });
});