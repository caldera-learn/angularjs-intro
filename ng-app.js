wpNG = {};

wpNG.app = ( function( app ){
    console.log( 'initializing..' );
    // define our app

    app = angular.module('wpAngularApp', [])

        // Filter
        .filter('to_trusted',['$sce',function($sce){
            return function(text){
                return $sce.trustAsHtml(text);
            };
        }])

        // List View Controller
        .controller( 'listView', ['$scope', '$http', function( $scope, $http ) {

            // Get JSON Data
            $http.get( 'data.json' ).then(function(res){
                $scope.posts = res.data.posts;
            });

        }]);

    return app;
}(wpNG.app || {}));
