import{
  inputForest,
  inputRain,
  inputCoffee,
  inputFire
} from "./elements.js"

export default function sound() {
  const forest = new Audio("./sounds/Floresta.wav")
  const rain = new Audio("./sounds/Chuva.wav")
  const cofeeShop = new Audio("./sounds/Cafeteria.wav")
  const firePlace = new Audio("./sounds/Lareira.wav")

  forest.loop = true
  rain.loop = true
  cofeeShop.loop = true
  firePlace.loop = true  

  function forestSound(){
    forest.play()
    rain.pause()
    cofeeShop.pause()
    firePlace.pause()
  }
  
  function rainSound(){
    rain.play()
    forest.pause()
    cofeeShop.pause()
    firePlace.pause()
  }
  
  function coffeeShopSound(){
    cofeeShop.play()
    rain.pause()
    forest.pause()
    firePlace.pause()
  }
  
  function fireplaceSound(){
    firePlace.play()
    rain.pause()
    forest.pause()
    cofeeShop.pause()
  }

  function setVolume(){
    forest.volume = inputForest.value
    rain.volume = inputRain.value
    cofeeShop.volume = inputCoffee.value
    firePlace.volume = inputFire.value
  }

  function resetForest(){
    inputForest.value = 0.5
  }

  function resetRain(){
    inputRain.value = 0.5
  }

  function resetCoffee(){
    inputCoffee.value = 0.5
  }

  function resetFire(){
    inputFire.value = 0.5
  }


  return{
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound,
    setVolume,
    resetForest,
    resetRain,
    resetCoffee,
    resetFire
  }
}