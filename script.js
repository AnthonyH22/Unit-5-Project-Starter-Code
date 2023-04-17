let age = document.querySelector(".question1")
let userChoice = document.querySelector(".question2")
let submit = document.querySelector(".submit")
let resultBox = document.querySelector(".result")
let atomImg = document.querySelector(".atomImg")
let constantineImg = document.querySelector(".constantineImg")
let arrowImg = document.querySelector(".arrowImg")
let flashImg = document.querySelector(".flashImg")

submit.onclick = function() {

  let input1 = age.value
  let input2 = userChoice.value

  console.log(input1, input2)


  // for atom and constantine
  if (input1 > 0 && input1 <= 40) {

    if (input2 == "A" || input2 == "a") {
      resultBox.innerHTML = "Congrats, you are the ATOM"
      atomImg.style.display = "block"
      constantineImg.style.display = "none"
      arrowImg.style.display = "none"
      flashImg.style.display = "none"
    }

    else if (input2 == "B" || input2 == "b") {
      resultBox.innerHTML = "Congrats, you are Constantine"
      atomImg.style.display = "none"
      constantineImg.style.display = "block"
      arrowImg.style.display = "none"
      flashImg.style.display = "none"
    }

    else if (input2 == "C" || input2 == "c") {
      resultBox.innerHTML = "Congrats, you are the Arrow"
      atomImg.style.display = "none"
      constantineImg.style.display = "none"
      arrowImg.style.display = "block"
      flashImg.style.display = "none"
    }

    else if (input2 == "D" || input2 == "d") {
      resultBox.innerHTML = "Congrats, you are the Flash"
      atomImg.style.display = "none"
      constantineImg.style.display = "none"
      arrowImg.style.display = "none"
      flashImg.style.display = "block"
    }
    else {
      resultBox.innerHTML = "Sorry, one of the fields that you entered might be invalid, try again!"
      atomImg.style.display = "none"
      constantineImg.style.display = "none"
      arrowImg.style.display = "none"
      flashImg.style.display = "none"
    }

  }
}