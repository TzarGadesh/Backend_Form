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

// Klik na logo
$(".nav-logo").click(function(){
    let text = document.querySelector("#nav-oNama a").innerText;

    switch(text){
        case "O NAMA": window.open("home.html","_self") 
            break;
        case "ABOUT": window.open("home-eng.html","_self")
            break;
        case "ABOUT(RUS)": window.open("home-rus.html","_self")
            break;
    }
})

$(".nav-menu div").click(function(){
    window.open(this.firstElementChild.attributes.href.value,"_self");
})

