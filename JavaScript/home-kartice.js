const kontenti = document.querySelectorAll(".card-content")
promenaVisina()
function promenaVisina() {
    let maxVisina = 0;

    kontenti.forEach(kontent => {
        const visinaP = kontent.offsetHeight; 
        if(visinaP > maxVisina){
            maxVisina = visinaP;
        }
    }) 
    // 
    kontenti.forEach(kontent => {
        kontent.style.height = `${maxVisina}px`;
    }) 
}

window.onresize = promenaVisina;

// kontenti.forEach(kontent => kontent.addEventListener("hover", ()=>{
//     // kontent.style.transform = `translateY()`
// }))
