const $ = id => document.getElementById(id);

HTMLElement.prototype.clear = function(){
	this.innerHTML = "";
}
