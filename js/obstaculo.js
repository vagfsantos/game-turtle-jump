function Obstaculo(sprite){
	this.sprite = sprite;
	this.x = 0;
	this.y = 0;
	this.velocidadeX = 5;
	this.largura = 25;
	this.altura = 25;
}

Obstaculo.prototype = {
	atualizar: function(){
		this.sprite.proximoFrame();
		this.x -= this.velocidadeX;
		if(this.x < 0){
			elementoNaTela.excluirElemento(this);
		}
	},

	areaDeColisao:function(){
		var retangulos = {
			'x':this.x + this.largura / 3,
			'y':this.y + this.altura / 3,
			'largura':this.largura,
			'altura':this.altura
		}

		rect(retangulos.x, retangulos.y, retangulos.largura, retangulos.altura);
		return retangulos;
	},

	desenhar: function(){
		this.sprite.desenhar(this.x, this.y);
		colisor.testarColisao();
		this.areaDeColisao();
	}
}