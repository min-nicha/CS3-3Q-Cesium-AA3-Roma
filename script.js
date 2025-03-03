function checkMessage() {
	message = prompt('What\'s the word?');
	
	if(message.includes('FR') && message.includes('AI')) {
		document.getElementById('result').innerHTML = 'The message ' + '"' + message + '"' + ' is legitimate!';
	}
	else if(message.includes('aI') || message.includes('Ai')) {
		document.getElementById('result').innerHTML = 'The message ' + '"' + message + '"' + ' is fake!';
	}
	else if(message.includes('AI')) {
		document.getElementById('result').innerHTML = 'The message ' + '"' + message + '"' + ' is fake!';
	}
	else if(message.includes('FR')) {
		document.getElementById('result').innerHTML = 'The message ' + '"' + message + '"' +  ' is legitimate!';
	}
	else {
		document.getElementById('result').innerHTML = 'The message ' + '"' + message + '"' + ' is not yet encoded!';
	}
}
