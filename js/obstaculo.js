function Obstaculo(sprite){
	this.sprite = sprite;
	this.x = 0;
	this.y = 0;
	this.velocidadeX = 5;
	this.largura = 20;
	this.altura = 20;
}

Obstaculo.prototype = {
	atualizar: function(){
		sprite_fogo.proximoFrame();
		this.x -= this.velocidadeX;
	},

	desenhar: function(){
		this.sprite.desenhar(this.x, this.y);
	}
}