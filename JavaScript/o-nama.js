const plusici = document.querySelectorAll(".pitanje span");
let spustenOdgovor = false;

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