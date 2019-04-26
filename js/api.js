class API{
	/*This class performs API requests using built-in XMLHttpRequest class.
	*/

	static send(method, link, callback, pathparams=null){
		/*This will send `method` request to `link`, using given path
		* parameters.
		*
		* Arguments:
		* 	method (string): Type of request that will be performed
		* 		(GET, POST, etc.)
		* 	link (string): Relative link to page to make request to.
		* 	pathparams (associative array): Path parameters that will be
		* 		inserted after `link`.
		* 	callback (function): Function which will get JSON-parsed data.
		* 		Should take only one parameter of type Object (associative
		* 		array).
		*/
		const requester = new XMLHttpRequest();

		requester.onreadystatechange = e => {
			if(
				requester.readyState !== 4 ||
				requester.status !== 200 ||
				!requester.responseText
			) return false;
			callback(JSON.parse(requester.responseText));
		}

		if(pathparams){
			link += "?";
			for([key, value] of Object.entries(pathparams))
				link += `${key}=${value}&`;
			link = link.slice(0, -1);
		}

		requester.open(method, link);
		requester.send();
	}

}
