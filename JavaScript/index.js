animacijaLogo()

function animacijaLogo() {

    for (i = 0; i < 900; i++) {
        $(".crno-za-animaciju").css("transform", "translate(" + i + "px)");
    }

    setTimeout(function () {
        $("main").css("display", "grid");
        $(".loading").css("display", "none");
    }, 3000);
    setTimeout(function () {
        animacijaJezici()
    }, 3750);

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
            window.open("home-rus.html", "_self")
            break;
    }
})