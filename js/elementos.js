function ElementoNaTela(){
	this.elementos = [];
}

ElementoNaTela.prototype = {
	novoElemento:function(elem){
		this.elementos.push(elem);
	},

	atualizar:function(){
		for(var i in this.elementos){
			this.elementos[i].atualizar();
		}
	},

	desenhar:function(){
		for(var i in this.elementos){
			this.elementos[i].desenhar();
		}
	}	
}