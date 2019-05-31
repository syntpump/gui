class TreeParser {
	/*This class contains methods for parsing trees. It can be used in order
	* show syntactic trees.
	* Format of trees:
	*  - each vertex is a object with `linksTo` property.
	*  - if the vertex has no this property, that it has no children.
	*  - tree is given as array with objects.
	*/

	constructor(objects){
		this.objects = objects;
	}

	getById(id){
		for(let vertex of this.objects)
			if(vertex.id == id)
				return vertex
	}

	getChildsOf(id){
		const root = this.getById(id);

		if(!root.hasOwnProperty("linksTo"))
			return null;

		return root.linksTo;
	}

	get rootId(){
		let ids = []

		for(let vertex of this.objects)
			ids.push(vertex.id);

		for(let vertex of this.objects){
			if(!vertex.hasOwnProperty("linksTo"))
				continue;
			ids = ids.filter(
				el => !~vertex.linksTo.indexOf(el))
		}

		return ids[0];
	}

	get leaves(){
		return this.objects.filter(
			vertex => !vertex.hasOwnProperty("linksTo"));
	}
}
