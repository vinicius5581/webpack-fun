import _ from 'lodash';

function component () {
	var element = document.createElement('div');

	element.innerHTML = _.map(['Hello' , 'webpack'], function(item){
		return item + ' ';
	});

	return element 
}


function component2 () {
	var element = document.createElement('div');


	element.innerHTML = ['Hello' , 'webpack'].map(function(item){
		return item + ' ';
	});

	return element 
}

document.body.appendChild(component());