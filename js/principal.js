/*
	- Defini as variáveis globais
	- Pré carrega os arquivos a serem utilizados
	- Defini as configurações principais
	- Inicia o game e configura os parâmetros bases.
	- Executa o looping de animação
	- Inicia a partida
*/


// ---------------------------------
// 1 - VARIAVEIS GLOBAIS
// ---------------------------------
var nuvem1, nuvem2, img_nuvem1, img_nuvem2;

var fundo_fixo, ruaAltura, ruaY;

var img_tartarruga, sprite_tartarruga, personagem_tartarruga;

var evento;

var img_bomba, sprite_bomba;

var elementoNaTela, colisor;


// ---------------------------------
// 2 - PRE CARREGANDO OS ARQUIVOS
// ---------------------------------
function preload(){
	img_tartarruga = loadImage("img/tartarruga.png");
	sprite_tartarruga = new Sprite(img_tartarruga, 4, 4);
	personagem_tartarruga = new Tartarruga(sprite_tartarruga);

	img_nuvem1 = loadImage("img/nuvem-1.png");
	nuvem1 = new Fundo(img_nuvem1);
	nuvem1.velocidadeX = 1;

	img_nuvem2 = loadImage("img/nuvem-2.png");
	nuvem2 = new Fundo(img_nuvem2);
	nuvem2.velocidadeX = 2;

	img_bomba = loadImage("img/sprite-bomba.png");

	evento = new Evento();
	//fundo_fixo = new Fundo(null);
	colisor = new Colisores();

	elementoNaTela = new ElementoNaTela();
	//elementoNaTela.novoElemento(fundo_fixo);
	elementoNaTela.novoElemento(nuvem1);
	elementoNaTela.novoElemento(nuvem2);
	
	elementoNaTela.novoElemento(personagem_tartarruga);
	colisor.novoSprite(personagem_tartarruga);
}


// ---------------------------------
// 3 - CONFIGURAÇÕES GERAIS
// ---------------------------------
function setup(){
	createCanvas(600, 350);
	frameRate(30);

	ruaAltura = height * 20 / 100; // 20% da altura do canvas
	ruaY = height - ruaAltura;

	// ajustando altura Y do personagem
	personagem_tartarruga.posicaoChao = ruaY - 55;
	personagem_tartarruga.y = ruaY - 55;

	// game comeca pausado
	noLoop();
}


// ---------------------------------
// 4 - LOOPING DE ANIMAÇÃO
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

	function criar(){
		var sprite_bomba = new Sprite(img_bomba, 1, 6);

		sprite_bomba.largura = 40;
		sprite_bomba.altura = 40;
		sprite_bomba.linha = 0;
		sprite_bomba.intervalo = 40;

		var obstaculo = new Obstaculo(sprite_bomba);
		obstaculo.x = width;
		obstaculo.y = ruaY - 40;
		elementoNaTela.novoElemento(obstaculo);
		colisor.novoSprite(obstaculo);
	}

	tempoAgora = new Date().getTime();
	if(!ultimoTempo) ultimoTempo = tempoAgora;

	if(tempoAgora - ultimoTempo < tempoPercorrido) return;
	criar();
	tempoPercorrido = sorteiaTempo();
	ultimoTempo = tempoAgora;
}

// ---------------------------------
// 6- COMEÇANDO A PARTIDA
// ---------------------------------
function iniciarPartida(){
	document.querySelector("#inicio").classList.toggle("ativo");
	loop();
}

var botaoJogar = document.querySelector("#jogar");
botaoJogar.addEventListener('click', iniciarPartida);