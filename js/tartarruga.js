function Tartarruga(sprite){
	this.sprite = sprite;
	this.x = 20;
	this.y = 0;
	this.posicaoChao = 0;

	this.aceleracaoY = 4;
	this.velocidadeY = -20;

	this.tamanhoDoSalto = 0;

	this.ultimoTempoAbaixado = null;
	this.tempoAbaixado = 500;
}

Tartarruga.prototype = {
	pula:function(){
		// muda sprite tartarruga
		sprite_tartarruga.linha = 2;
		this.y += this.velocidadeY;
		this.velocidadeY += this.aceleracaoY;

		if(this.y <= this.tamanhoDoSalto || this.y >= this.posicaoChao){
			this.velocidadeY *= -1;

			if(this.y >= this.posicaoChao){
				this.velocidadeY = -20;
				evento.pular = false;
				sprite_tartarruga.linha = 1;
			}
		}
	},

	abaixa:function(){
		// Tempo do salto
		var tempoAgora = new Date().getTime();

		if(!this.ultimoTempoAbaixado) this.ultimoTempoAbaixado = tempoAgora;

		sprite_tartarruga.linha = 3;

		if(tempoAgora - this.ultimoTempoAbaixado > this.tempoAbaixado){
			sprite_tartarruga.linha = 1;
			evento.abaixar = false;
			this.ultimoTempoAbaixado = null;
		}	
	},

	atualizar: function(){
		// se apertou a tecla, tartarruga pula
		if(evento.pular){
			this.pula();
		}
		// se apertou a tecla, tartarruga abaixa
		if(evento.abaixar){
			this.abaixa();
		}

		sprite_tartarruga.proximoFrame();

	},

	desenhar: function(){
		this.sprite.desenhar(this.x, this.y);
	}
}