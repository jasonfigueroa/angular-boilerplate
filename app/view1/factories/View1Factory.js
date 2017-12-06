angular
  .module("NgBoilerApp")
  .factory("View1Factory", function ($http) {
    return Object.create(null, {
      "cache": {
        value: null,
        writable: true
      },
      // "list": {
      //   value: function () {
      //     return $http({
      //       method: "GET",
      //       url: "https://angular-employees-6727b.firebaseio.com/employees/.json"
      //     }).then(response => {
      //       const data = response.data

      //       this.cache = Object.keys(data).map(key => {
      //         data[key].id = key
      //         return data[key]
      //       })

      //       return this.cache
      //     })
      //   }
      // },
      // "single": {
      //   value: function (key) {
      //     return $http({
      //       method: "GET",
      //       url: `https://angular-employees-6727b.firebaseio.com/employees/${key}/.json`
      //     }).then(response => {
      //       return response.data
      //     })
      //   }
      // },
      // "murder": {
      //   value: function (key) {
      //     return $http({
      //       method: "DELETE",
      //       url: `https://angular-employees-6727b.firebaseio.com/employees/${key}/.json`
      //     })
      //   }
      // },
      // "find": {
      //   value: function (searchString) {
      //     const result = this.cache.find(emp => {
      //       return emp.firstName.includes(searchString) ||
      //         emp.lastName.includes(searchString)
      //     })
      //     return result
      //   }
      // },
      // "fire": {
      //   value: function (employee, key) {
      //     employee.employmentEnd = Date.now()

      //     return $http({
      //       method: "PUT",
      //       url: `https://angular-employees-6727b.firebaseio.com/employees/${key}/.json`,
      //       data: employee
      //     })
      //   }
      // },
      "add": {
        value: function (employee) {
          // Get a key for a new Post.
          var newPostKey = firebase.database().ref().child('posts').push().key;
          // Write the new post's data simultaneously in the posts list and the user's post list.
          var updates = {};
          updates['/employees/' + newPostKey] = employee;
        
          return firebase.database().ref().update(updates);
          // console.log(employee);

          // return $http({
          //   method: "POST",
          //   url: "https://angular-employees-6727b.firebaseio.com/employees/.json",
          //   data: {
          //     "firstName": employee.firstName,
          //     "lastName": employee.lastName,
          //   }
          // })
        }
      } // End of "add"

    })
  })