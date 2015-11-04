angular.module('madApp', []).controller('firstCtrl', function($scope) {

    

    $scope.revealText = function () {
        showStorytoggle = true;
    };

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
    // function to submit form after validation
    $scope.submitForm = function (isValid) {

        //to see if form is validation
        if (isValid) {
            alert('Valid Form');
        } else {
            alert('NOT Valid Form');
        }
    };
});
