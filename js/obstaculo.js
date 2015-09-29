function Obstaculo(){
	this.x = 0;
	this.y = 0;
	this.velocidadeX = 5;
	this.largura = 20;
	this.altura = 20;
}

Obstaculo.prototype = {
	atualizar: function(){
		this.x = this.x - this.velocidadeX; 
	},

	desenhar: function(){
		fill(0);
		rect(this.x, this.y, this.largura, this.altura);
	}
}