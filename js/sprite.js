function Sprite(imagem, linhas, colunas){
	// imagem e numero de linhas e colunas da img
	this.imagem = imagem;
	this.numLinhas = linhas;
	this.numColunas = colunas;

	// tamanho do recorte da sprite
	this.largura = 60;
	this.altura = 55;

	// intervalo de trasicao dos frames em MS
	this.intervalo = 80;
	this.ultimoTempo = null;

	// imagem atual da sprite
	this.coluna = 0;
	this.linha = 1;
	this.cicloUnico = false;
	this.explodiu = false;
}

Sprite.prototype = {
	proximoFrame: function(){
		// tempo agora
		var tempoAtual = new Date().getTime();
		
		// existe um ultimoTempo ja?
		if(!this.ultimoTempo) this.ultimoTempo = tempoAtual;

		// hora de mudar de coluna?
		if(tempoAtual - this.ultimoTempo < this.intervalo) return;
		
		// mundando de coluna
		if(this.coluna < this.numColunas - 1){
			this.coluna++;
		} else{
			if(!this.cicloUnico){
				this.coluna = 0;
			} else{
				this.explodiu = true;
			}
		}

		this.ultimoTempo = tempoAtual;
	},

	desenhar: function(posX, posY){
		var largura = this.imagem.width / this.numColunas;
		var altura = this.imagem.height / this.numLinhas;

		var x = largura * this.coluna;
		var y = altura * this.linha;
		
		image(this.imagem.get(x, y, largura, altura), posX, posY);
	}
}