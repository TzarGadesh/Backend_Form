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
      
      var elementVisible = 150;
      if (elementTop < windowHeight + elementVisible) {
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
  