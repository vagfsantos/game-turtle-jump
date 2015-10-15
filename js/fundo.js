function Fundo(imagem){
	this.imagem = imagem;
	this.x = 0;
	this.y = 0;
	this.breakpoint = -600;
	this.velocidadeX = 0;
}

Fundo.prototype = {
	atualizar:function(){
		if(this.x < this.breakpoint) this.x = 0;
		this.x -= this.velocidadeX;
	},

	desenhar:function(){
		image(this.imagem, this.x, this.y);
		noStroke();
		// Rua - ilusao 3d
		fill(106, 84, 30); 
		rect(0, ruaY-10, width, ruaAltura);

		fill(85, 64, 14);// marrom
		rect(0, ruaY, width, ruaAltura);

	}
}

			