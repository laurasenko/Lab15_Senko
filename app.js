

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
		template: "According to the Hitchhiker's Guide to the Galaxy, Vogons are a race from the planet Vogosphere that are responsible for the destruction of Earth. Vogon poetry is widely accepted as the third worst in the universe."
	});
});

