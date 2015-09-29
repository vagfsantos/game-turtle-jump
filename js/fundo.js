function Fundo(){

}

Fundo.prototype = {
	atualizar:function(){

	},

	desenhar:function(){
		// Desenhando cenario
		background(142, 211, 227);
		
		noStroke();
		// Rua - ilusao 3d
		fill(106, 84, 30); 
		rect(0, ruaY-10, width, ruaAltura);

		fill(85, 64, 14);// marrom
		rect(0, ruaY, width, ruaAltura);
	}
}

			