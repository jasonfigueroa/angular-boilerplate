angular
.module("NgBoilerApp") // TODO change NgBoilerApp to app name
.controller("View1Ctrl", function ($scope, View1Factory) {
    $scope.employee = {};

    $scope.loginEmail = '';
    $scope.loginPassword = '';

    // add login event
  $scope.login = () => {
    const email = $scope.loginEmail;
    const pass = $scope.loginPassword;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  }

  $scope.signUp = () => {
    const email = $scope.loginEmail;
    const pass = $scope.loginPassword;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  };

  $scope.logout = () => {
    firebase.auth().signOut();
  };
  $scope.addEmployee = () => {
    View1Factory.add($scope.employee);
    // console.log($scope.employee);
    // console.log(`first name: ${$scope.employee.fname}`);
    // console.log(`last name: ${$scope.employee.lname}`);

  };

  // add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      console.log('logged in');
      // btnLogout.classList.remove('hidden');
      // adminForm.classList.remove('hidden');
    } else {
      console.log('not logged in');
      // btnLogout.classList.add('hidden');
    }
  });

})