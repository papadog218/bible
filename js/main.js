$(function(){
    $(".oldTitle").click(function(){
        if($(".oldTitle i").attr("class") === "fas fa-angle-down") {
            $(".oldTitle i").removeClass("fa-angle-down");
            $(".oldTitle i").addClass("fa-angle-up");
            $(".oldList").css({"display":"block"});
        } else {
            $(".oldTitle i").removeClass("fa-angle-up");
            $(".oldTitle i").addClass("fa-angle-down");
            $(".oldList").css({"display":"none"});
        }
    })
    $(".newTitle").click(function(){
        if($(".newTitle i").attr("class") === "fas fa-angle-down") {
            $(".newTitle i").removeClass("fa-angle-down");
            $(".newTitle i").addClass("fa-angle-up");
            $(".newList").css({"display":"block"});
        } else {
            $(".newTitle i").removeClass("fa-angle-up");
            $(".newTitle i").addClass("fa-angle-down");
            $(".newList").css({"display":"none"});
        }
    })
});
function goPage(page) {
    location.href = page;
    return;
}