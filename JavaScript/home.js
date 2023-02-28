let valueDisplays = document.querySelectorAll(".num");
let interval = 2500;
const brojacEl = document.querySelector("#brojacMain")
let flagUcitan = false;

const countingAnimation = () => {
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;

      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
}



  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      
      var elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        if(reveals[i] === brojacEl && !flagUcitan){
          countingAnimation();
          flagUcitan = true;
        }
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  

  $('.klik').click(function(){
    
    switch(this.innerText){
      case "Drumski transport": window.open("usluge.html#drum-a", "_self")
        break;
      case "Avio transport": window.open("usluge.html#avio-a", "_self")
        break;
      case "Brodski transport": window.open("usluge.html#brod-a", "_self")
        break;
      case "Zbirni transport": window.open("usluge.html#zbirni-a", "_self")
        break;
      case "Usluge carinjenja": window.open("usluge.html#carina-a", "_self")
        break;
      case "Usluge skladištenja": window.open("usluge.html#skladiste-a", "_self")
        break;
    }
  });