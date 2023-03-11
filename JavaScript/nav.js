const navLogo = document.querySelector(".nav-logo");
const navLogoImg = document.querySelector(".nav-logo img");
const navMenuDivs = document.querySelectorAll(".nav-menu div");

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
    $(".nav-menu").toggleClass("nav-menu-grid");

    $("body").toggleClass("body-grid");
}

// navLogo.addEventListener("click", () => {
//     let text = document.querySelector("#nav-oNama a").innerText;
//     console.log(text)
//     switch(text){
//         case "O nama": window.open("/home.html","_self") 
//             break;
//         case "About us": window.open("/home-eng.html","_self")
//             break;
//         case "ABOUT(RUS)": window.open("/home-rus.html","_self")
//             break;
//     }
// })

// navLogoImg.addEventListener("click", () => {
//     let text = document.querySelector("#nav-oNama a").innerText;
//     console.log(text)
//     switch(text){
//         case "O nama": window.open("/home.html","_self") 
//             break;
//         case "About us": window.open("/home-eng.html","_self")
//             break;
//         case "ABOUT(RUS)": window.open("/home-rus.html","_self")
//             break;
//     }
// })

navMenuDivs.forEach(navDiv => {
    navDiv.addEventListener("click", () => {
        window.open(this.firstElementChild.attributes.href.value,"_self");
    })
})

// $(".nav-menu div").click(function(){
//     window.open(this.firstElementChild.attributes.href.value,"_self");
// })

