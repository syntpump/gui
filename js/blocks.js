class Blocks{
	/*This class contains HTML templates.
	*/

	static ruleContainer(args){
		if(!args["_id"])
			args["_id"] = `<span class="ruleId noId">(немає id)</span>`;
		else
			args["_id"] = `<span class="ruleId">id: ${args["_id"]}</span>`;

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
			<div class="ruleBlock box">
				<div class="top">
					<span class="upos">${args["upos"]}</span>
					<span class="xpos">${args["xpos"]}</span>
				</div>
				<table class="properties">${properties}</table>
				${args["_id"]}
			</div>
		`;
	}
}
