angular.module('madApp', ['ngMessages']).controller('firstCtrl', function($scope) {

$scope.master = {};

    $scope.name = {
        placeholder: 'Add a name',
        value: ''
    };
    // $scope.location = 'location';
    $scope.location = {
        placeholder: 'Add a location',
        value: ''
    };
    $scope.adjective = {
        placeholder: 'Add an adjective',
        value: ''
    };
    $scope.verb = {
        placeholder: 'Add a verb',
        value: ''
    };
    $scope.adverb = {
        placeholder: 'Add an adverb',
        value: ''
    };
    $scope.number = {
        placeholder: 'Input a number',
        value: ''    
    };
    // function to submit form after validation
    $scope.submitForm = function (isValid) {

        //to see if form is validation
        if (isValid) {
            $scope.showText = true;
        } else {
            $scope.showText = false;
        }
    };
    $scope.showErrors = true;
    //reset function
    $scope.reset = function () {
        $scope.name = angular.copy($scope.master);
        // $scope.name.placeholder = angular.copy($scope.name.placeholder);
        angular.copy($scope.master, $scope.name);

        // to be done later
        $scope.name.placeholder = 'Add a name';
        $scope.name.value = '';
        //
        $scope.location.placeholder = 'Add a location';
        $scope.location.value = '';

        $scope.adjective.placeholder = 'Add an adjective';
        $scope.adjective.value = '';
        $scope.verb.placeholder = 'Add a verb';
        $scope.verb.value = '';
        $scope.adverb.placeholder = 'Add an adverb';
        $scope.adverb.value = '';
        $scope.showText = false;
    };
});
