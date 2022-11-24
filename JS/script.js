import sound from "./sounds.js";
import{
  btnPlay,
  btnStop,
  btnPlus,
  btnDecrease,
  secondsScreen,
  minutesScreen,
  floresta,
  chuva,
  cafeteria,
  lareira,
  btnLight,
  btnDark,
  inputForest,
  inputRain,
  inputCoffee,
  inputFire,
  controlsDark,
  spanDark,
  sectionDark
} from "./elements.js"

let minutes;
let temporizador;

const sounds = sound()


inputForest.addEventListener('input', () => {
  sounds.setVolume()
})
inputRain.addEventListener('input', () => {
  sounds.setVolume()
})
inputCoffee.addEventListener('input', () => {
  sounds.setVolume()
})
inputFire.addEventListener('input', () => {
  sounds.setVolume()
})

floresta.addEventListener("click",  () => {
  sounds.forestSound()
  sounds.resetForest()
})

chuva.addEventListener("click", () => {
  sounds.rainSound()
  sounds.resetRain()
})

cafeteria.addEventListener("click", () => {
  sounds.coffeeShopSound()
  sounds.resetCoffee()
})

lareira.addEventListener("click", () => {
  sounds.fireplaceSound()
  sounds.resetFire()
})


function contadorDeSegundos() {
  temporizador = setTimeout(function(){
  
    let seconds = Number(secondsScreen.textContent)
     minutes = Number(minutesScreen.textContent)
    let whenFinish = minutes <= 0 && seconds <= 0

      if(whenFinish == true){
          return
      }

      if(seconds <= 0){
        seconds = 60

        minutesScreen.textContent = String(minutes - 1).padStart(2, '0')
      }

      secondsScreen.textContent = String(seconds - 1).padStart(2, '0')

      contadorDeSegundos()

  }, 1000)
}

btnPlay.addEventListener("click", function acionarTimer(){
  contadorDeSegundos()
})

btnStop.addEventListener("click", function pausarTimer() {
  clearTimeout(temporizador)
  minutesScreen.textContent = '25'
  secondsScreen.textContent = '00'
})

btnPlus.addEventListener("click", function adicionarCincoMinNoTimer() {
  if(minutesScreen.textContent >= 0) {
    let cont = Number(minutesScreen.textContent)
    minutesScreen.textContent = String(cont + 5).padStart(2, 0)
  }
})

btnDecrease.addEventListener("click", function retirarCincoMinNoTimer() {
  if(minutesScreen.textContent > 0) {
    let cont = Number(minutesScreen.textContent)
    minutesScreen.textContent = String(cont - 5).padStart(2, 0)
  }
})




btnLight.addEventListener('click', () => {
  let body = document.querySelector(".corpo")
  body.style.backgroundColor = "black";
  btnDark.classList.remove("hide")
  btnLight.classList.add("hide")
  controlsDark.classList.toggle("dark")
  secondsScreen.classList.add("dark")
  minutesScreen.classList.add("dark")
  spanDark.classList.toggle("dark")
  inputForest.classList.toggle("bgDark")
  inputRain.classList.toggle("bgDark")
  inputCoffee.classList.toggle("bgDark")
  inputFire.classList.toggle("bgDark")
  sectionDark.classList.toggle("sectionDark")
})

btnDark.addEventListener('click', () => {
  let body = document.querySelector(".corpo")
  body.style.backgroundColor = "white"
  btnLight.classList.remove("hide")
  btnDark.classList.add("hide")
  controlsDark.classList.toggle("dark")
  secondsScreen.classList.remove("dark")
  minutesScreen.classList.remove("dark")
  spanDark.classList.toggle("dark")
  inputForest.classList.toggle("bgDark")
  inputRain.classList.toggle("bgDark")
  inputCoffee.classList.toggle("bgDark")
  inputFire.classList.toggle("bgDark")
  sectionDark.classList.toggle("sectionDark")
})

