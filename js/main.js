const reel1 = document.querySelector('#reel1')
const reel2 = document.querySelector('#reel2')
const reel3 = document.querySelector('#reel3')
const spinButton = document.querySelector('#spin')
const maxButton = document.querySelector('#max')
const minButton = document.querySelector('#min')
const result = document.querySelector('#totalCash')


// To make spin button work
spinButton.addEventListener('click', spinning)
const picArray = []

// to make spin button random
function spinning(){
  let randomNumber1 = Math.ceil(Math.random()*5)
  let randomNumber2 = Math.ceil(Math.random()*5)
  let randomNumber3 = Math.ceil(Math.random()*5)
  console.log(randomNumber1)

  // to put text in html
  reel1.innerText=randomNumber1
  reel2.innerText=randomNumber2
  reel3.innerText=randomNumber3

  checkWin(randomNumber1, randomNumber2, randomNumber3)
}
// total cash goes up or down if you win or lose

let total = 1000
let betting = 0

maxButton.addEventListener('click', max)
minButton.addEventListener('click', min)
// max button values go up

function max(){
  betting = 50
}

// min button goes down to 0
function min(){
  betting = 10
}

// checks if wins

function checkWin(rn1,rn2,rn3){
  if (rn1 == rn2 && rn1==rn3){
    console.log('checkWin')
     total = betting + total 
      result.innerText = total
  }else{
    console.log('you lose')
    total = total - betting
    result.innerText = total
  }
}