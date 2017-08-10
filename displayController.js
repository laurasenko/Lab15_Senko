

var app = angular.module("madLibsApp");

// Define a controller named 'displayController'
app.controller("displayController", function($scope, madLibsService) {
    // Add a variable called "story" to the scope.
   $scope.story = madLibsService.getInput();
  
});

