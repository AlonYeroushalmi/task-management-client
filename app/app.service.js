angular.module('crudApp').service('TaskService', function($http) {
    const apiUrl = 'http://localhost:3000';

    this.getTasks = function() {
        return $http.get(apiUrl);
    };

    this.createTask = function(task) {
        return $http.post(apiUrl, task);
    };

    this.updateTask = function(id, task) {
        return $http.put(`${apiUrl}/${id}`, task);
    };

    this.deleteTask = function(id) {
        return $http.delete(`${apiUrl}/${id}`);
    };
});