var currentPosition = parseInt($("#remote-controller").css("top"));
$(window).scroll(function() {
    var position = $(window).scrollTop(); 
    $("#remote-controller").stop().animate({"top":position+currentPosition+"px"},1000); 
});