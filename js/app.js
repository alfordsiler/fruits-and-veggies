/* setup your angular app here */

// debug stuff to show the app is loading and fruit / veggies are available

var app = angular.module('fruitsVeggies', []);
app.controller('list', ['$scope', function($scope) {
  console.log("controller loaded");

  $scope.produce = fruits.concat(vegetables).sort();
  $scope.fruits = [];
  $scope.veggies = [];
  $scope.loser = false;

  $scope.moveLeft = function(index){
    var clickedItem = $scope.produce.splice(index, 1);
    $scope.fruits.push(clickedItem.toString());
    $scope.checkAnswers();
    console.log($scope.produce);
  }

  $scope.moveVeggieLeft = function(index){
    var clickedItem = $scope.veggies.splice(index, 1);
    $scope.produce.push(clickedItem.toString());
    $scope.checkAnswers();
  }

  $scope.moveRight = function(index){
    var clickedItem = $scope.produce.splice(index, 1);
    $scope.veggies.push(clickedItem.toString());
    $scope.checkAnswers();
  }

   $scope.moveFruitRight = function(index){
    var clickedItem = $scope.fruits.splice(index, 1);
    $scope.produce.push(clickedItem.toString());
    $scope.checkAnswers();
  }

  $scope.checkAnswers = function(){
    if($scope.produce.length === 0){
      $scope.veggies.forEach(function(item){
        if(vegetables.indexOf(item) === -1){
          console.log(item + " is wrong");
          $scope.color = "red";
          $scope.loser = true;
        }
      });
      $scope.fruits.forEach(function(item){
        if(fruits.indexOf(item) === -1) {
          console.log(item + " is wrong");
          $scope.color = "red";
          $scope.loser = true;
        }
      });
      if($scope.loser === false){
        console.log("Win")
      }
    }
  };
}]);
