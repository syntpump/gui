const $ = id => document.getElementById(id);

HTMLElement.prototype.clear = function(){
	this.innerHTML = "";
}

HTMLElement.prototype.apply = function(fn){
	this.applierFn = fn;
	return this;
}

HTMLElement.prototype.toEachFrom = function(array){
	array.forEach(
		obj => this.innerHTML += this.applierFn(obj)
	);
	this.applierFn = null;
}

HTMLElement.prototype.toOneFrom = function(obj){
	this.innerHTML += this.applierFn(obj);
	this.applierFn = null;
}

HTMLElement.prototype.runOnEnter = function(fn){
	this.addEventListener(
		"keydown",
		e => e.keyCode == 13 ? fn() : false
	);
}
