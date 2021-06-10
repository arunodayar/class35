var database;
var form,game,player;
var playerCount;
var gameState=0;

function setup(){
    createCanvas(500,500);
    //instance
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    
}

