function Colisores(){
	this.sprites = [];
}

Colisores.prototype = {
	// Adicionando um novo elemento colisível
	novoSprite:function(novaSprite){
		this.sprites.push(novaSprite);
	},

	// Testando colisão entre os elementos na tela
	testarColisao:function(){
		for(var i in this.sprites){
			for(var j in this.sprites){
				if(	// Não comparar elementos iguais
					(this.sprites[i] === this.sprites[j]) &&
					((this.sprites[i] instanceof Obstaculo) && (this.sprites[j] instanceof Obstaculo))
				) continue;

				// Guardando cara elemento
				var spriteA = this.sprites[i];
				var spriteB = this.sprites[j];

				// Retorna area de colisao dos elementos
				var areaA = spriteA.areaDeColisao();
				var areaB = spriteB.areaDeColisao();

				// Detectando colisao entre elementos na tela
				if( // 'A' como referencia -> testando elemento A com elemento B
					(areaA.x > areaB.x && areaA.x < areaB.x + areaB.largura) &&
					(areaA.y > areaB.y && areaA.y < areaB.y + areaB.altura) ||

					// 'B' como referencia -> testando elemento B com elemento A
					(areaB.x > areaA.x && areaB.x < areaA.x + areaA.largura) &&
					(areaB.y > areaA.y && areaB.y < areaA.y + areaA.altura)
				)
				{
					elementoNaTela.excluirElemento(spriteA);
					elementoNaTela.excluirElemento(spriteB);
				}
			}
		}
	}
}