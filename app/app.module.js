angular.module('crudApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/create-task', {
                templateUrl: 'views/create-task.html',
                controller: 'CreateTaskController'
            })
            .when('/get-tasks', {
                templateUrl: 'views/get-tasks.html',
                controller: 'GetTasksController'
            })
            .when('/update-task', {
                templateUrl: 'views/update-task.html',
                controller: 'UpdateTaskController'
            })
            .when('/remove-task', {
                templateUrl: 'views/remove-task.html',
                controller: 'RemoveTaskController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
