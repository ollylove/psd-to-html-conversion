$(document).ready(function(){
    $(".slider").slick({
       nextArrow: "<span class='fa fa-chevron-right'></span>",
       prevArrow: "",
       dots: true,
       infinite: false
    });
    $("nav a").on('click', function(e) {
        e.preventDefault();
        $("nav a").removeClass("active");
        $(this).addClass("active");
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top-40
        }, 900, function() {
            window.location.hash = target;
        });
    });
    $(".menu").on("click",function(){
        $(this).toggleClass("clicked");
    });
    $(".pricing .col-4").on("click",function(){
        $(this).addClass("touch");
    });
});
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
if (isChrome || isSafari) {
    document.querySelector("select").classList.add("noappearance");
}