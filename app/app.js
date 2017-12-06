angular.module("NgBoilerApp", ["ngRoute"])

// TODO may be removing the following block
// const isAuth = AuthFactory => new Promise ((resolve, reject) => {
//     if (AuthFactory.isAuthenticated()){
//         console.log("User is authenticated, resolve route promise")
//         resolve()
//     } else {
//         console.log("User is not authenticated, reject route promise")
//         reject()
//     }
// })

// TODO change NgBoilerApp to app name
angular.module("NgBoilerApp").config(function ($routeProvider) {
  $routeProvider
    // TODO change these accordingly
    .when("/", {
        templateUrl: "app/view1/partials/view1.html",
        controller: "View1Ctrl",
        
        // may remove the following
        // resolve: { isAuth }
    })
    .when("/view2", {
        templateUrl: "app/view2/partials/view2.html",
        controller: "View2Ctrl",
        
        // may remove the following
        // resolve: { isAuth }
    })
    .otherwise('/')
})