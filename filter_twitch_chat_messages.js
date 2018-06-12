/* Hide chat message if a word with at least 3 letters is detected more than 4 times in a chat message */

$(document).ready(function(){
	var isSpamMessage = false;
	var ignoreWordsWithNumChars = 3;
	var repeatedWordLimit = 2;

	var message = $('span[data-a-target="chat-message-text"]').text();
	var arrayOfChatWords = [];

	arrayOfChatWords = message.split(" ");
	arrayOfChatWords = arrayOfChatWords.filter(function(a){ if (a.length >= ignoreWordsWithNumChars) return a;
	});
	 
	 
	/* Instantiate dictionary object */
	var countedListOfWords = {};

	/* Create dictionary object with word counts */
	arrayOfChatWords.forEach(function(x) {
		countedListOfWords[x] = (countedListOfWords[x] || 0)+1;
	});

	var numCountedListOfWords = Object.keys(countedListOfWords).length
	for (var i = 0; i < numCountedListOfWords; i++) { 
	    if ( countedListOfWords[Object.keys(countedListOfWords)[i]] >= repeatedWordLimit ) {
	    	console.log("I detected a word that occured at least 4 times.");
	      var isSpamMessage = true;
	    }
	}


	if ( isSpamMessage ) {
		console.log('Spam message detected.');
		/* $('span.chat').hide(); */
	}
});