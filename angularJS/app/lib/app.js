var myApp = angular.module("myApp", []);

// myApp.config(function () {});

// myApp.run(function () {});

myApp.controller("ChanController", [
  $scope,
  function ($scope) {
    $scope.message = "Hello Chan";

    $scope.list = [
      {
        name: "Chan",
        belt: "Green",
      },
      {
        name: "Ram",
        belt: "Blue",
      },
    ];
  },
]);
