angular.module('aspNetAngularJsApp', [])
    .controller('HelloController', function ($http) {
        var _this = this;
        _this.title = 'Hello from Angular';
        _this.myList = ['Apple', 'Banana', 'Plum', 'Figs'];
        _this.value = 'loading ...';

        $http.get('api/values')
            .then(function (response) {
                console.log(response);
                _this.value = response.data;
            }, function (error) {
                console.error(error);
                _this.value = 'there was an error'
            });
    });