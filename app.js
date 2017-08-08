(function() {  //IIFE

var madLibsApp = angular.module("madLibsApp", ["ngRoute"]);

madLibsApp.config(function($routeProvider) {

	$routeProvider.when("/input", {
		templateUrl: "views/input.html",
		controller: "inputController"
	});
	
	$routeProvider.when("/display", {
		templateUrl: "views/display.html",
		controller: "displayController"	
	});

	$routeProvider.otherwise ({
		template: "Please select one of the links above to play Mad Libs."
	});
});

})();  //IIFE