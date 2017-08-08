(function() { // <-- IIFE

var app = angular.module("madLibsApp");

// Define a controller named 'displayController'
app.controller("displayController", function($scope, madLibsService) {
    // Add a variable called "input" to the scope.
   $scope.displayInput = function() {
    	madLibsService.getInput();
    };
});

})();