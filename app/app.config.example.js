// change NgBoilerApp to name of app
angular.module("NgBoilerApp").constant("FIREBASE_CONFIG", {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
});

// change NgBoilerApp to name of app
angular.module("NgBoilerApp").run(function (FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});