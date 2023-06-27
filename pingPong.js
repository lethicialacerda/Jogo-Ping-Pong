//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

let velocidadexBolinha = 4;
let velocidadeyBolinha = 4;


//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 80;

//variaveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponentes = 0;




function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentoRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();

  
     
  }

function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha +=  + velocidadexBolinha;
  yBolinha +=  + velocidadeyBolinha;
  
}

function verificaColisaoBorda(){
  if(xBolinha > width || xBolinha < 0){
    velocidadexBolinha *= -1;
  }
   
  if(yBolinha > height || yBolinha < 0){
    velocidadeyBolinha *= -1;
}

}

function mostraRaquete(x, y){
  rect(x, y, raqueteLargura, raqueteAltura);
}


function movimentoRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteLargura && 
    yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
       velocidadexBolinha *= -1;
     }
}

function verificaColisaoRaquete(x,y){
  colidiu = 
    collideRectCircle(x, y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
velocidadexBolinha *= -1;
  }
}

  function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteLargura/2 -30;
    yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
  
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(188,143,143));
  rect(150, 8, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(188,143,143));
  rect(450, 8, 40, 20);
  fill(255); 
  text(pontosDoOponentes, 470, 26);
  
}
  
function marcaPonto(){
  if(xBolinha > 590){
  meusPontos +=1;
  }
  if(xBolinha < 10){
  pontosDoOponentes +=1;
  }
}

