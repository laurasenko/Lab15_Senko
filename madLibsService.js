

//Define the module
var app = angular.module("madLibsApp");

//Define the service "madLibs Service" with 2 methods: getInput and setInput
app.factory ("madLibsService", function () {

	var words;

	    return {
        setInput: function(value) {
            words = value;
            console.log("words in madLibsService", words);
        },
        getInput: function() {
            //console.log(words);
        	return words;
        }
    };
});

