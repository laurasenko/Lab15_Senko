(function() { // <-- IIFE

var app = angular.module("madLibsApp");

// Define a controller named 'inputController' 
app.controller("inputController", function($scope, madLibsService) {
    // Add a variable called "input" to the scope.
    $scope.inputWord = function(word) {
    	madLibsService.setInput();
    };
});

})();