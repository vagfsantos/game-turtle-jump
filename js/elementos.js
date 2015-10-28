/*
	Controla todos os elementos que serão animados e/ou desenhados na tela.

	Objetivo:
	Guardar todos os elementos que serão desenhados no canvas em um único Array,
	suas ações são, solicitar a atualização e o método desenhar de cada elemento.
*/

function ElementoNaTela(){
	this.elementos = [];
	this.gameOver = false;
}

ElementoNaTela.prototype = {
	// Adicionando novo elemento a ser animado na tela
	novoElemento:function(elem){
		this.elementos.push(elem);
	},

	// excluindo elementos que saem da tela para nao prejudicar a performace
	excluirElemento:function(elem){
		var pos = this.elementos.indexOf(elem);
		this.elementos.splice(pos, 1);

		var pos = colisor.sprites.indexOf(elem);
		colisor.sprites.splice(pos, 1);
	},

	// atualizando posições
	atualizar:function(){
		for(var i in this.elementos){
			this.elementos[i].atualizar();
		}
	},
	
	// Desenhando na tela
	desenhar:function(){
		if(!this.gameOver){
			for(var i in this.elementos){
				this.elementos[i].desenhar();
			}
		} else{
			noLoop();
			fill(200);
			rect(0, 0, width, height);
			image(img_fimDeJogo, width/6, height/6);
		}
	}	
}