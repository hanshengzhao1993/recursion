var getElementsByClassName = function(className , node , answer= []
) {
	// var answer = [];

	node = node || document.body

	if( node.classList ){
		if(node.classList.contains(className)){
			answer.push(node);
		}
	}

	for(var i = 0; i < node.children.length ; i++){
		getElementsByClassName( className , node.children[i], answer);


	}

	return answer;

};

