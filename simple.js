//music
var music = new Audio("button.mp3");
var music1 = new Audio("game over.mp3");
var music2 = new Audio("you winner.mp3");
var music3 = new Audio("you lost.mp3");

music.loop = false;
music.playbackRate = 1;

function function1() {
  music.play();
  var user_score = document.querySelector("#user_score1");
  var cpu_score = document.querySelector("#cpu_score1");
  var img1 = document.querySelector("#null1");
  img1.style.animation = "img_ani  0.2s 5 ";
  img1.src = "canva stone.png";
  const img2 = document.querySelector("#null");
  img2.style.animation = "img_ani 0.2s 5";
  var random = Math.floor(Math.random() * 3);
  var st = 0;
  var se = document.getElementById("first");
  //random
  if (random == 0) {
    img2.src = "canva stone.png";
    img2.style.animation = "img_ani1  0.2s 5";
  } else if (random == 1) {
    img2.src = "canva paper.png";
    img2.style.animation = "img_ani1  0.2s 5";
  } else if (random == 2) {
    img2.src = "canva scissor.png";
    img2.style.animation = "img_ani1  0.2s 5";
  }
  //compare
  if (st == random) {
    console.log("tie" + random);
    img1.src = "TIE.png";
    img2.src = "TIE.png";
    music1.play();
    var bn = document.getElementById("btn1");
  } else if (st == 0 && random == 1) {
    console.log("cpu win" + random);
    img1.src = "TIE (1).png";
    music3.play();
  } else if (st == 0 && random == 2) {
    console.log("user win" + random);
    img2.src = "TIE (1).png";
    music2.play();
  }
}

function function2() {
  music.play();

  const img1 = document.querySelector("#null1");
  img1.style.animation = "img_ani  0.2s 5";
  img1.src = "canva paper.png";
  const img2 = document.querySelector("#null");
  var random = Math.floor(Math.random() * 3);
  var st = 1;
  //
  if (random == 0) {
    img2.src = "canva stone.png";
    img2.style.animation = "img_ani1  0.2s 5";
  } else if (random == 1) {
    img2.src = "canva paper.png";
    img2.style.animation = "img_ani1  0.2s 5";
  } else if (random == 2) {
    img2.src = "canva scissor.png";
    img2.style.animation = "img_ani1  0.2s 5";
  }
  if (st == random) {
    console.log("tie" + random);
    img1.src = "TIE.png";
    img2.src = "TIE.png";
    music1.play();
  } else if (st == 1 && random == 0) {
    console.log("user win" + random);
    img2.src = "TIE (1).png";
    music2.play();
  } else if (st == 1 && random == 2) {
    console.log("cpu win" + random);
    img1.src = "TIE (1).png";
    music3.play();
  }
}
function function3() {
  music.play();

  const img1 = document.querySelector("#null1");
  img1.style.animation = "img_ani  0.2s 5";

  img1.src = "canva scissor.png";
  const img2 = document.querySelector("#null");
  var random = Math.floor(Math.random() * 3);
  var st = 2;
  //
  if (random == 0) {
    img2.src = "canva stone.png";
    img2.style.animation = "img_ani1  0.2s 5";
  } else if (random == 1) {
    img2.src = "canva paper.png";
    img2.style.animation = "img_ani1  0.2s 5";
  } else if (random == 2) {
    img2.src = "canva scissor.png";
    img2.style.animation = "img_ani1  0.2s 5";
  }
  if (st == random) {
    console.log("tie" + random);
    img1.src = "TIE.png";
    img2.src = "TIE.png";
    music1.play();
  } else if (st == 2 && random == 0) {
    console.log("cpu win" + random);
    img1.src = "TIE (1).png";
    music3.play();
  } else if (st == 2 && random == 1) {
    console.log("user win" + random);
    img2.src = "TIE (1).png";
    music2.play();
  }
}
