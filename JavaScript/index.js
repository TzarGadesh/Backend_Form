animacijaLogo()

function animacijaLogo(){
    $(".jezici").toggleClass("aktivan")
}
$("button").click(function(){
    switch(this.attributes.id.value){
        case "srpski-jezik": window.open("home.html","_self")
            break;
        case "engleski-jezik": window.open("home-eng.html","_self")
            break;
        case "ruski-jezik": window.open("home-rus.html","_self")
            break;
    }
})