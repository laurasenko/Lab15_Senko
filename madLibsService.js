(function() { //IIFE

//Define the module
var app = angular.module("madLibsApp");

//Define the service "madLibs Service" with 2 methods: getInput and setInput
app.factory ("madLibsService", function () {

	var words = [
	/*{word: 'noun_1', placeholder: 'noun'},
	{word: 'noun_2', placeholder: 'noun'},
	{word: 'verb_1', placeholder: 'verb'},
	{word: 'verb_2', placeholder: 'verb'},
	{word: 'adj_1', placeholder: 'adjective'},
	{word: 'adj_2', placeholder: 'adjective'},
	{word: 'adv', placeholder: 'adverb'},*/
	];

	    return {
        setInput: function(value) {
            value= words;
            console.log(value);
        },
        getInput: function() {
            return words;
            console.log(words);
        }
    };
});

	/*function getInput() {
		input = word;
	}
	function setInput() {
		return input;
	}
	//return an object w/ two methods in it
	return {
		getInput : getInput,
		setInput : setInput
	};
});*/


})();