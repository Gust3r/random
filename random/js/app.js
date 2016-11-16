angular.module("myApp", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state("home", {
    url:"/",
    controller: "homeCtrl",
    templateUrl: "./views/home/homeTemplate.html"
  });


});
