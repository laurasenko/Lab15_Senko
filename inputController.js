

var app = angular.module("madLibsApp");

// Define a controller named 'inputController' 
app.controller("inputController", function($scope, madLibsService, $location) {
	//initializes empty array
	$scope.words = {};   
    // Add a variable called "setInput" to the scope.
    $scope.setInput = function() {
    	madLibsService.setInput($scope.words);
    	$location.path("/display");
    }
});

