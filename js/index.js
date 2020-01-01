$(function(){
    $("input.ge").change(function(){
        if($("input.ge").is(":checked")){
            $("i.fa-circle").addClass("fa-dot-circle");
            $("i.fa-circle").removeClass("fa-circle");
        } else {
            $("i.fa-dot-circle").addClass("fa-circle");
            $("i.fa-dot-circle").removeClass("fa-dot-circle");
        }
    })
});