class Blocks{
	/*This class contains HTML templates.
	*/

	static ruleContainer(args){
		if(!args["_id"])
			args["_id"] = "(немає id)";

		let properties = "";

		for(const [key, value] of Object.entries(args)){
			if(key in Localization.udProps){
				properties += `
					<tr>
						<td>${Localization.udProps[key]}</td>
						<td>${Localization.udValues[value]}</td>
					</tr>
				`;
			}
		}

		return `
			<div class="ruleBlock">
				<div class="top">
					<span class="upos">${args["upos"]}</span>
					<span class="xpos">${args["xpos"]}</span>
				</div>
				<table class="properties">${properties}</table>
				<span class="ruleId">${args["_id"]}</span>
			</div>
		`;
	}
}
