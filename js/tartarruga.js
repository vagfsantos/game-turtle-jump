function Tartarruga(sprite){
	this.sprite = sprite;
	this.x = 20;
	this.y = 0;
	this.posicaoChao = 0;

	this.aceleracaoY = 2;
	this.velocidadeY = -12;

	this.tamanhoDoSalto = 0;
	this.tempoDoSalto = 800;
	this.ultimoTempoPulado = null;

	this.ultimoTempoAbaixado = null;
	this.tempoAbaixado = 1000;
}

Tartarruga.prototype = {
	pula:function(){

	},

	abaixa:function(){
	//	console.log("abaixei");
	//	this.y += 20;
	},

	atualizar: function(){
		// Se usuario clicar na parte direita da tela, personagem pula
		if(evento.toqueDireita){
			// Tempo do salto
			var tempoAgora = new Date().getTime();
			if(!this.ultimoTempoPulado) this.ultimoTempoPulado = tempoAgora;

			// muda sprite tartarruga
			sprite_tartarruga.linha = 2;

			// Pula tartarruga
			if(tempoAgora - this.ultimoTempoPulado < this.tempoDoSalto){
				this.y += this.velocidadeY;
				//this.velocidadeY += this.aceleracaoY;
				if(this.y < this.tamanhoDoSalto || this.y > this.posicaoChao){
					this.velocidadeY = this.velocidadeY * -1;
					if(this.y >= this.posicaoChao){
						evento.toqueDireita = false;
						sprite_tartarruga.linha = 1;
					}
				}
			}

			this.ultimoTempoPulado = tempoAgora;
		}



		if(evento.toqueEsquerda){
			// Tempo do salto
			var tempoAgora = new Date().getTime();

			if(!this.ultimoTempoAbaixado) this.ultimoTempoAbaixado = tempoAgora;

			sprite_tartarruga.linha = 3;

			if(tempoAgora - this.ultimoTempoAbaixado > this.tempoAbaixado){
				console.log(tempoAgora - this.ultimoTempoAbaixado);
				sprite_tartarruga.linha = 1;
				evento.toqueEsquerda = false;
			}

			this.ultimoTempoAbaixado = tempoAgora;

		}

	},

	desenhar: function(){
		this.sprite.desenhar(this.x, this.y);
	}
}