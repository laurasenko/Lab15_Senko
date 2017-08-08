(function() { //IIFE

//Define the module
var app = angular.module("madLibsApp");

//Define the service "madLibs Service" with 2 methods: getInput and setInput
app.factory ("madLibsService", function () {

	var word;

	    return {
        setInput: function(value) {
            word = value;
        },
        getInput: function() {
            return word;
            console.log(word);
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