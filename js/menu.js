
// ---------------------------------
// COMEÇANDO A PARTIDA
// ---------------------------------
function iniciarPartida(){
	document.querySelector("#instrucoes").classList.toggle("ativo");
	loop();
}

var botaoComecar = document.querySelector("#comecar");
botaoComecar.addEventListener('click', iniciarPartida);



// FULLSCREEN
function telaCheia(){
	document.querySelector("#inicio").classList.remove("ativo");
	if(window.innerWidth < 800){
		var minhaTela = document.querySelector('body');
		if (minhaTela.requestFullscreen){
			minhaTela.requestFullscreen();
		} else if (minhaTela.msRequestFullscreen){
			minhaTela.msRequestFullscreen();
		}else if (minhaTela.mozRequestFullScreen){
			minhaTela.mozRequestFullScreen();
		} else if (minhaTela.webkitRequestFullscreen){
			minhaTela.webkitRequestFullscreen();
		} else{
			alert('Atualize seu navegador');
		}

		resizeCanvas(window.innerWidth, window.innerHeight);
		baseLayout();
	}
}

var botaoJogar = document.querySelector("#jogar");
botaoJogar.addEventListener('click', telaCheia);

// ---------------------------------
// PAUSANDO A PARTIDA
// ---------------------------------
var pausado = false;
function pausar(){
	if(!pausado){
		noLoop();
		pausado = true;
		ultimoTempo = null;
	} else{
		loop();
		pausado = false;
		ultimoTempo = new Date().getTime();
	}
}
var botaoPausar = document.querySelector("#pause");
botaoPausar.addEventListener('click', pausar);


// ---------------------------------
// ADPTANDO TELA
// ---------------------------------
window.onresize = function() {
	if(window.innerWidth < 800){
		resizeCanvas(window.innerWidth, window.innerHeight);
		baseLayout();
	} else{
		resizeCanvas(600, 350);
		baseLayout();
	}
}

window.onload = function(){
	document.querySelector("#carregando").classList.remove("ativo");
}