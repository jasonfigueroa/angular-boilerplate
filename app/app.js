angular.module("NgBoilerApp", ["ngRoute"])

// TODO change NgBoilerApp to app name
angular.module("NgBoilerApp").config(function ($routeProvider) {
  $routeProvider
    // TODO change routes accordingly
    .when("/", {
        templateUrl: "app/login/partials/login.html",
        controller: "LoginCtrl"
    })
    .when("/employees/new", {
        templateUrl: "app/employees/partials/create.html",
        controller: "EmployeeCreateCtrl"
    })
    // default route
    .otherwise({redirectTo: '/'});
})