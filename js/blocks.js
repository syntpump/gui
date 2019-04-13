class Blocks{
	/*This class contains HTML templates.
	*/

	static ruleContainer(args){
		return `
			<div class="ruleBlock">
				<span class="pos">${args["upos"]}</span>
			</div>
		`;
	}
}
