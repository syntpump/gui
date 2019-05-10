class Blocks{
	/*This class contains HTML templates.
	*/

	static PropertiesTable(args){
		let objIsEmpty = true;
		let properties = "";

		for(const [key, value] of Object.entries(args)){
			if(key in Localization.udProps){
				objIsEmpty = false;
				properties += `
					<tr>
						<td>${Localization.udProps[key]}</td>
						<td>${Localization.udValues[key + "." + value]}</td>
					</tr>
				`;
			}
		}

		if(objIsEmpty)
			return "";

		return `<table class="listTable">${properties}</table>`;
	}

	static RuleContainer(args){
		if(args["_id"])
			args["_id"] = `<span class="ruleId">id: ${args["_id"]}</span>`;
		else
			args["_id"] = ``;

		return `
			<div class="ruleBlock box">
				<div class="top">
					<span class="upos">${args["upos"]}</span>
					<span class="xpos">${args["xpos"]}</span>
				</div>
				${Blocks.PropertiesTable(args)}
				${args["_id"]}
			</div>
		`;
	}

	static TaggedSenWord(args){
		return `
			<div class="galleryItem">
				<span class="caption">${args["word"]}</span>
				<div class="ruleBlock box narrow">
					<span class="upos">${args["upos"]}</span>
					${Blocks.PropertiesTable(args)}
				</div>
			</div>
		`;
	}
}
