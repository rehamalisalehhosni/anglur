  function ItemService($http,$window) {
  this.list = function() {
  return $http({method: 'GET', url: 'http://localhost/anglur_lab2/list.php'});
  };

  this.deleteitem=function(id){
     console.log(id);
     $http({
        method: "post",
        url:"delete.php",
        data: id,
        }).then(function(rest) {
           // console.log(rest);
            $window.location.href = 'http://localhost/anglur_lab2/list.html';
        });
  };
  this.add = function(item) {
//    items.push(item);
    $http({
    method: "post",
    url:"service.php",
    data: item,
    }).then(function(rest) {
         $window.location.href = 'http://localhost/anglur_lab2/list.html';

    });
  };
}
//var x;
  angular.module('formApp', [])
    .controller('data', ['ItemService','$http','$window',function(ItemService,$http,$window) {
          var self =this;
                  $http({
                    method: "post",
                    url:"data.php",
                    data: self.id,
                    }).success(function(data) {
                       self.item=data;
                    });
    }])
    .controller('formsData', ['ItemService','$http','$window',function(ItemService,$http,$window) {
      var self = this;
      self.submit = function() {
         console.log(self.user);
         //x=self.user;
         ItemService.add( self.user);
      };
      self.items = [];
/*        $http({method: 'GET', url: 'http://localhost/anglur_lab2/list.php'}).success(function(data) {
            self.items = data;
          });*/
        ItemService.list().success(function(data){
          console.log(data);
            self.items = data;
        });
      /*$http.get('http://localhost/anglur_lab2/list.php').then(function(response) {
        self.items = response.data;
      }, function(errResponse) {
        console.error('Error while fetching notes');
      });*/
/*         console.log( self.items);
*/     
     self.deleteFu=function(id){
       ItemService.deleteitem(id);
     }   
     self.editFu=function(id){
       $window.location.href = 'http://localhost/anglur_lab2/edit.html?id='+id;
     }   
    }])
    .service('ItemService', ['$http','$window',ItemService]);
    ;