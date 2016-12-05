// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	// if(typeof obj === "number" || obj === null || typeof obj === "boolean"){
	// 	return "" + obj;
	// }
	if(obj === null){
		return "" + obj;
	}

	if(typeof obj === "string"){
		return '"' + obj + '"';
	}

	if( Array.isArray(obj) ){
		var answer = [];
		for(var i = 0 ; i < obj.length ; i++){
			answer.push(stringifyJSON(obj[i]))
		}
		return '[' + answer + ']';
	}

	if ( !Array.isArray(obj) && typeof obj === "object"){
		var answer = [];

		for(var key in obj){
			if(obj[key] === undefined || typeof obj[key] === "function"){
				continue;
			}
			answer.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]))
		}

		return '{' + answer + '}';
	}

	return "" + obj;
};
