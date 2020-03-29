$("input[type='text']").on("keypress", function(e) {
    
    if(e.which === 13){
        if($("input[type='text']").val().length < 1 ){
            $("#massge").text("Can Not Add Empty Value!");
            $("#massge").addClass("emptyMassege");
            setTimeout(function(){
                $("#massge").removeClass("emptyMassege");
                $("#massge").text("");
            },2000);
        }else{
        var list = $(this).val();
        $(this).val("");
        $("ul").append("<li class='col-10 col-xl-8'>"+ list +" <span><i class='fa fa-trash'></i></span></li>");
        $("#massge").text("Item Added To The List");
        $("#massge").addClass("addMassege");
        setTimeout(function(){
            $("#massge").removeClass("addMassege");
            $("#massge").text("");
        },2000);
    }
    }
});

$("#button-addon2").on("click", function(e) {
    
    
        if($("input[type='text']").val().length < 1 ){
            $("#massge").text("Can Not Add Empty Value!");
            $("#massge").addClass("emptyMassege");
            setTimeout(function(){
                $("#massge").removeClass("emptyMassege");
                $("#massge").text("");
            },2000);
        }else{
        var list = $("input[type='text']").val();
        $("input[type='text']").val("");
        $("ul").append("<li class='col-10 col-xl-8'>"+ list +" <span><i class='fa fa-trash'></i></span></li>");
        $("#massge").text("Item Added To The List");
        $("#massge").addClass("addMassege");
        setTimeout(function(){
            $("#massge").removeClass("addMassege");
            $("#massge").text("");
        },2000);
    }
    
});


$("#btn").click(function(){
    $("ul").empty();
});

$("span").click(function(){
    $(li).remove();
});

$("ul").on("click","span",function(event){
        $(this).parent().remove();
        event.stopPropagation();
});
