// estado dos eventos
function Evento(){
	this.pular = false;
	this.abaixar = false;
}

// Controle de eventos touch
function touchStarted(){
	if(touchX > window.innerWidth / 2){
		evento.pular = true;
	} else{
		evento.abaixar = true;
	}
}

// Controle de eventos do teclado, SETAS ou W e S, fazem o personagem pular e abaixar
function keyPressed(){
	if(keyCode === UP_ARROW || keyCode === 87){
		evento.pular = true;
	}
	if(keyCode === DOWN_ARROW || keyCode === 83){
		evento.abaixar = true;
	}
}
