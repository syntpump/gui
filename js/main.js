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

HTMLElement.prototype.addBlockInset = function(name, inner, left){
	/*Place element with given tag `name` and `inner` stuff onto current
	* element with `left` padding.
	*/

	const el = document.createElement(name);
	el.innerHTML = inner;
	el.applyStyle({
		position: "relative",
		left: left + "px"
	});

	return this.appendChild(el);
}

HTMLElement.prototype.applyStyle = function(styles){
	/*Applies listened style to object. */

	for(let rule in styles)
		this.style[rule] = styles[rule];
	return this;
}

HTMLElement.prototype.pointerTo = function(el, caption){
	/*Draws a pointer between HTMLElements*/

	const from = this.getBoundingClientRect();
	const to = el.getBoundingClientRect();
	const x1 = from.left + from.width/2;
	const x2 = to.left + to.width/2;
	const y1 = from.top;
	const y2 = to.top + to.height;
	const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
	const l = Math.sqrt( (x1 - x2)**2 + (y1 - y2)**2 );

	const arrow = document.createElement('div');
	arrow.className = 'arrow';
	arrow.applyStyle({
		top: `${y1}px`,
		left: `${x1}px`,
		transform: `rotate(${angle}deg)`,
		width: `${l}px`
	});

	if(!caption)
		return arrows.appendChild(arrow);

	const span = document.createElement('span');
	span.className = 'caption';
	span.innerText = caption;
	span.applyStyle({
		top : `${(y2+y1)/2}px`,
		left : `${(x2+x1)/2}px`
	});

	return {
		arrow: arrows.appendChild(arrow),
		span: arrows.appendChild(span)
	};
}
