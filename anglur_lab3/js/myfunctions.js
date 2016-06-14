  
  angular.module('formApp',['ngRoute'])
    .controller('formsData', ['$http',function($http) {
      var self = this;
      self.items = [];
        $http({method: 'GET', url: 'http://localhost/anglur_lab3/list.php'}).success(function(data) {
            self.items = data;
        });    
    }])
    
  .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
          template: '<h5>hiiii</h5>'
        })
        .when('/products', {
          templateUrl: 'templates/products.html',
          controller: 'formsData as ctrl',
        })
        .when('/details/:proid', {
          templateUrl: 'templates/details.html',
          controller: ['$routeParams','$http',function($routeParams,$http){
            this.id=$routeParams.proid;
                 var self =this;
                  $http({
                    method: "post",
                    url:"details.php",
                    data: self.id,
                    }).success(function(data) {
                      console.log(data);
                       self.item=data;
                    });
          }],
          controllerAs:"myctrl"
        })
        .otherwise({redirectTo: '/'});
      }]);