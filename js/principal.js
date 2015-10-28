/*
	- Defini as variáveis globais
	- Pré carrega os arquivos a serem utilizados
	- Defini as configurações principais
	- Inicia o game e configura os parâmetros bases.
	- Executa o looping de animação
*/


// ---------------------------------
// VARIAVEIS GLOBAIS
// ---------------------------------
var nuvem1, nuvem2, img_nuvem1, img_nuvem2;

var ruaAltura, ruaY;

var img_tartarruga, sprite_tartarruga, personagem_tartarruga;

var evento;

var img_cidade1, cidade1, img_cidade2, cidade2;

var img_bomba, sprite_bomba;

var img_aviao, sprite_aviao;

var img_explosao, sprite_explosao;

var img_fimDeJogo;

var elementoNaTela, colisor;


// ---------------------------------
// PRE CARREGANDO OS ARQUIVOS
// ---------------------------------
function preload(){
	img_tartarruga = loadImage("img/tartarruga.png");
	
	img_nuvem1 = loadImage("img/nuvem-1.png");
	img_nuvem2 = loadImage("img/nuvem-2.png");

	img_cidade1 = loadImage("img/cidade-1.png");
	img_cidade2 = loadImage("img/cidade-2.png");

	img_bomba = loadImage("img/sprite-bomba.png");
	img_aviao = loadImage("img/sprite-aviao.png");

	img_fimDeJogo = loadImage("img/fim.png");
	img_explosao = loadImage("img/sprite-explosao.png");
}


// ---------------------------------
// CONFIGURAÇÕES GERAIS
// ---------------------------------
function setup(){
	// game comeca pausado
	noLoop();

	//createCanvas(600, 350);
	if(window.innerWidth < 800){
		createCanvas(window.innerWidth, window.innerHeight);
	} else{
		createCanvas(600, 350);
	}
	frameRate(60);

	// Configuracoes
	sprite_tartarruga = new Sprite(img_tartarruga, 4, 4);
	personagem_tartarruga = new Tartarruga(sprite_tartarruga);

	baseLayout();

	nuvem1 = new Fundo(img_nuvem1);
	nuvem1.velocidadeX = 1;
	nuvem2 = new Fundo(img_nuvem2);
	nuvem2.velocidadeX = 2;

	cidade1 = new Fundo(img_cidade1);
	cidade1.velocidadeX = 1;
	cidade1.y = ruaY - img_cidade1.height -10;
	//cidade2 = new Fundo(img_cidade2);
	//cidade2.velocidadeX = 2;
	//cidade2.y = ruaY - img_cidade2.height;

	sprite_explosao = new Sprite(img_explosao, 1, 5);
	sprite_explosao.largura = 60;
	sprite_explosao.altura = 55;
	sprite_explosao.linha = 0;
	sprite_explosao.intervalo = 60;
	sprite_explosao.cicloUnico = true;

	evento = new Evento();
	colisor = new Colisores();
	elementoNaTela = new ElementoNaTela();

	elementoNaTela.novoElemento(nuvem1);
	elementoNaTela.novoElemento(nuvem2);
	elementoNaTela.novoElemento(cidade1);
	//elementoNaTela.novoElemento(cidade2);
	
	elementoNaTela.novoElemento(personagem_tartarruga);
	colisor.novoSprite(personagem_tartarruga);
}

// ---------------------------------
// CONFIGURAÇÕES BASE DO LAYOUT
// ---------------------------------
function baseLayout(){
	ruaAltura = height * 20 / 100; // 20% da altura do canvas
	ruaY = height - ruaAltura;

	// ajustando altura Y do personagem
	personagem_tartarruga.posicaoChao = ruaY - 55;
	personagem_tartarruga.y = ruaY - 55;
}



// ---------------------------------
// LOOPING DE ANIMAÇÃO
// ---------------------------------
function draw(){
	clear();
	background(142, 211, 227);
	elementoNaTela.atualizar();
	elementoNaTela.desenhar();
	criaObstaculo();
}


// ---------------------------------
// 5 - CRIANDO OBSTÁCULOS
// ---------------------------------
var tempoAgora = 0;
var tempoPercorrido = 2000;
var ultimoTempo = null;



function criaObstaculo(){
	
	function sorteiaTempo(){
		var max = 2000;
		var min = 1000;
		var tempoSorteado = Math.floor(Math.random() * (max - min) + min);

		return tempoSorteado;
	}

	function criar(obs){

		if(obs === 1){
			var sprite_bomba = new Sprite(img_bomba, 1, 6);
			sprite_bomba.largura = 40;
			sprite_bomba.altura = 40;
			sprite_bomba.linha = 0;
			sprite_bomba.intervalo = 40;

			var obstaculo = new Obstaculo(sprite_bomba);
			obstaculo.x = width;
			obstaculo.y = ruaY - 40;
			obstaculo.largura = 30;
			obstaculo.altura = 30;
			elementoNaTela.novoElemento(obstaculo);
			colisor.novoSprite(obstaculo);
		}

		if(obs === 2){
			var sprite_aviao = new Sprite(img_aviao, 1, 4);
			sprite_aviao.largura = 60;
			sprite_aviao.altura = 30;
			sprite_aviao.linha = 0;
			sprite_aviao.intervalo = 20;

			var obstaculo = new Obstaculo(sprite_aviao);
			obstaculo.x = width;
			obstaculo.y = ruaY - 70;
			obstaculo.largura = 60;
			obstaculo.altura = 30;
			elementoNaTela.novoElemento(obstaculo);
			colisor.novoSprite(obstaculo);
		}
	}

	tempoAgora = new Date().getTime();
	if(!ultimoTempo) ultimoTempo = tempoAgora;

	if(tempoAgora - ultimoTempo < tempoPercorrido) return;
	var sorteiaObstaculo = Math.ceil(Math.random()*2);
	criar(sorteiaObstaculo);
	tempoPercorrido = sorteiaTempo();
	ultimoTempo = tempoAgora;
}