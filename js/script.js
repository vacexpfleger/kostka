const kostka = document.getElementById("kostka");
const statistika = document.getElementById("statistika");
const buttonPlay = document.getElementById("buttonPlay");
const buttonReset = document.getElementById("buttonReset");
const last = document.getElementById("last");
const counter = document.getElementById("counter");
const summary = document.getElementById("summary");
const avg = document.getElementById("avg");
const maxi= document.getElementById("max");
const mini = document.getElementById("min");
let shake = document.getElementById("shake");
let roll = document.getElementById("roll");
let hod = 1;
let hody = [];
let timer = false;

function animace() {
  hod = Math.ceil(Math.random() * 6);
  kostka.src = "img/dice" + hod + ".png";
}

buttonPlay.addEventListener("click", function(){
  if(!timer){
    timer = setInterval(animace,50);
    shake.play();
    buttonPlay.innerText = "Stop";
  } else {
    shake.pause();
    roll.play();
    clearInterval(timer);
    timer = false;
    hody.push(hod);
    vypisStatistiky();
    buttonPlay.innerText = "Hrej";
  }
})

function suma(){
  let sum = 0;
  for (let i = 0; i < hody.length; i++){
    sum += hody[i];
  }
  return sum;
}

function max() {
  let maximum = 1;
  hody.forEach(function(value, index){
    if (value > maximum) maximum = value;
  })
  return maximum;
}

function min() {
  let minimum = 6;
  hody.forEach(function(value, index){
    if (value < minimum) minimum = value;
  })
  return minimum;
}

function vypisStatistiky() {
  last.innerText = `Poslední hod: ${hod}`;
  counter.innerText = `Počet hodů: ${hody.length}`;
  summary.innerText = `Součet: ${suma()}`;
  avg.innerText = `Průměr: ${(suma() / hody.length).toFixed(2)}`;
  maxi.innerText = `Maximum: ${max()}`;
  mini.innerText = `Minimum: ${min()}`;
}

buttonReset.addEventListener("click", function(){
  last.innerText = `Poslední hod: 0`;
  counter.innerText = `Počet hodů: 0`;
  summary.innerText = `Součet: 0`;
  avg.innerText = `Průměr: 0`;
  maxi.innerText = `Maximum: 0`;
  mini.innerText = `Minimum: 0`;

  hod = 1;
  hody = [];
  timer = false;
  sum = 0;
  maximum = 0;
  minimum = 0;
})
