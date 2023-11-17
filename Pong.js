//posi e tam da bola
let xbolinha = 300;
let ybolinha = 200;
let diametro = 25;
let raio = diametro / 2;

//velocidade da bolnha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variaveis da Raquete Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisãoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  verificaColisão(xRaquete, Yraquete);
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

//desenho da bolinha
function mostraBolinha() {
  fill("white");
  circle(xbolinha, ybolinha, diametro);
}

function movimentaBolinha() {
  xbolinha += velocidadeXbolinha;
  ybolinha += velocidadeYbolinha;
}

function verificaColisãoBorda() {
  if (xbolinha > width || xbolinha < 0) {
    velocidadeXbolinha *= -1;
  }
  if (ybolinha > height || ybolinha < 0) {
    velocidadeYbolinha *= -1;
  }
}

function mostraRaquete() {
  fill("gray");
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, 15);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisão() {
  if (
    xbolinha - raio < xRaquete + raqueteComprimento &&
    ybolinha - raio < yRaquete + raqueteAltura &&
    ybolinha + raio > yRaquete
  ) {
    velocidadeXbolinha *= -1;
  }
}

function mostraRaqueteOponente() {
  fill("gray");
  rect(
    xRaqueteOponente,
    yRaqueteOponente,
    raqueteComprimento,
    raqueteAltura,
    15
  );
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = ybolinha - yRaqueteOponente - raqueteAltura / 2;
  yRaqueteOponente += velocidadeYOponente;
}

function verificaColisaoRaqueteOponente() {
  colidiu = collideRectCircle(
    xRaqueteOponente,
    yRaqueteOponente,
    raqueteComprimento,
    raqueteAltura,
    xbolinha,
    ybolinha,
    raio
  );
  if (colidiu == true) {
    velocidadeXbolinha *= -1;
  }
}

function incluiPlacar() {
  fill(255)
  text(meusPontos, 278, 26)
  text(pontosDoOponente, 321, 26)
}

function marcaPonto() {
  if(xbolinha> 590){
    meusPontos += 1;
  }
    if (xbolinha <10){
      pontosDoOponente += 1;
    }
}
