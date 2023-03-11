animacijaLogo()


function animacijaLogo() {

    for (i = 0; i < 900; i++) {
        $(".crno-za-animaciju").css("transform", "translate(" + i + "px)");
    }

    setTimeout(function () {
        $("main").css("display", "flex");
        $(".loading").css("display", "none");
    }, 1750);
    setTimeout(function () {
        animacijaJezici()
    }, 2000);

}

function animacijaJezici() {
    $(".jezici").toggleClass("aktivan")
    $(".logo-slika").toggleClass("aktivan")
}
$("button").click(function () {
    switch (this.attributes.id.value) {
        case "srpski-jezik":
            window.open("home.html", "_self")
            break;
        case "engleski-jezik":
            window.open("home-eng.html", "_self")
            break;
        case "ruski-jezik":
            window.open("home.html", "_self")
            break;
    }
})