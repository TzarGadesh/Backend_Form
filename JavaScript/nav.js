function burgerClicked(){
    setTimeout(function(){
        $(".nav-burger-icon").toggleClass("burger-animation");
    },150);
    $(".nav-burger-icon").toggleClass("fa-bars");
    setTimeout(function(){
        $(".nav-burger-icon").toggleClass("fa-x");
    },150);
    $(".nav-burger-icon").toggleClass("burger-animation");

    $(".nav-logo").toggleClass("donji-border");
    $(".nav-burger").toggleClass("donji-border");
    $(".nav-menu").toggleClass("nav-menu-grid")
}