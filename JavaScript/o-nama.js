const plusici = document.querySelectorAll(".pitanje span");
let spustenOdgovor = false;
const kutijice = document.querySelectorAll(".pitanje")

const BoxIsteVelicine = () => {
  let maxSirina = 0;
  kutijice.forEach(kutija => {
    const sirinaKutije = kutija.offsetWidth;
    maxSirina = sirinaKutije > maxSirina ? sirinaKutije : maxSirina;
  })

  kutijice.forEach(kutija => {
    kutija.style.width = `${maxSirina}px`;
  })
}

BoxIsteVelicine();

const vratiSirinu = () => {
  kutijice.forEach(kutija => {
    kutija.style.width = `80%`;
  })
}

window.onresize = vratiSirinu;


const toggleOdgovor = (e) => {

  const brojic = e.target.dataset.redni;
  const odgovor = document.querySelector(`#odgovor-${brojic}`)

  if(!spustenOdgovor){
    odgovor.classList.add("spusten-odgovor")
    spustenOdgovor = true;
  }else{
    odgovor.classList.remove("spusten-odgovor")
    spustenOdgovor = false;
  }
}

plusici.forEach(plus => plus.addEventListener('click',toggleOdgovor))