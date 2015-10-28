function Tartarruga(sprite){
	this.sprite = sprite;
	this.x = 40;
	this.y = 0;
	this.posicaoChao = 0;

	this.aceleracaoY = 2;
	this.velocidadeY = -20;

	this.ultimoTempoAbaixado = null;
	this.tempoAbaixado = 700;
}

Tartarruga.prototype = {
	pula:function(){
		// muda sprite tartarruga
		sprite_tartarruga.linha = 2;
		this.y += this.velocidadeY;
		this.velocidadeY += this.aceleracaoY;

		if(this.y >= this.posicaoChao){
			this.velocidadeY = -20;
			evento.pular = false;
			sprite_tartarruga.linha = 1;
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

	areaDeColisao:function(){
		var retangulos = {
			'x': this.x + 15,
			'y': this.y,
			'largura': 30,
			'altura': 45
		}

		if(sprite_tartarruga.linha === 3){
			retangulos.y = this.y + 25;
			retangulos.altura = 20;
		}
		//rect(retangulos.x, retangulos.y, retangulos.largura, retangulos.altura);
		return retangulos;
	},

	explodir:function(){
		this.sprite = sprite_explosao;
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

		if(this.sprite.explodiu) {
			elementoNaTela.excluirElemento(this);
			elementoNaTela.gameOver = true;
		}

		sprite_tartarruga.proximoFrame();
		colisor.testarColisao();

	},

	desenhar: function(){
		this.sprite.desenhar(this.x, this.y);
	}
}