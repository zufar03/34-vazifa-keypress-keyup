$(function() {
    let isLeft = true;

    $(".tekshir").click(function(event) {
        event.preventDefault();
        
        let yangi = $('.form-control').val();
        if (!yangi) return;
        
        let eski = $(".chat").html();
        let chatClass = isLeft ? "left" : "right";
        
        $(".chat").html(eski + `<div class="${chatClass}"><h3>${yangi}</h3></div>`);
        
        $('.form-control').val("");
        $('.form-control').focus();
        
        isLeft = !isLeft;
    });
});
