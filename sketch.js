var canvas;
var database;
var contestantCount,quiz,contestant;
var gameState=0;
var question;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  question=new Question();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
