function Evento(){
	this.pular = false;
	this.abaixar = false;
}


// toque na tela, Direita -> PULA, Esquerda -> ABAIXA
function keyPressed(){
	if(keyCode === UP_ARROW || keyCode === 87){
		evento.pular = true;
	}
	if(keyCode === DOWN_ARROW || keyCode === 83){
		evento.abaixar = true;
	}
}
