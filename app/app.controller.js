angular.module('crudApp')
    .controller('CreateTaskController', function ($scope, $http) {
        //TODO: change it to get all categories from the server
        $scope.categories = [
            {id: '6729d3d6d111c0304bd2010d', name: 'Home'},
            {id: '6729d42bd111c0304bd20111', name: 'Hobbies Updated'}
        ];

        $scope.createTask = function () {
            $http.post('http://localhost:3000/tasks/', $scope.task)
                .then(function (response) {
                    alert('Task created successfully!');
                })
                .catch(function (error) {
                    console.error('Error creating task:', error);
                });
        };

    })
    .controller('GetTasksController', function ($scope, $http) {
        $http.get('http://localhost:3000/tasks/')
            .then(function (response) {
                $scope.tasks = response.data;
            })
            .catch(function (error) {
                console.error('Error fetching tasks:', error);
            });
    })
    .controller('MainController', function($scope, $location) {
        $scope.navigateTo = function (path) {
            $location.path(path);
        };
    });