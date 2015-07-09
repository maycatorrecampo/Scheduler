/*!!!! Note: transition some methods from 0.9x to 1.x.x !!!! */

//angular module
angular.module('scheduleApp', ['firebase'])
//controller
.controller('mainController', function($scope, $firebase){
    //firebase connection
    var ref = new Firebase("https://intense-heat-2719.firebaseio.com/days");
    var fb = $firebase(ref);
    
    //Reset: set default data
    $scope.reset = function(){

        fb.$set({
            monday:{
                name: 'Monday',
                slots:{
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    }
                }
            },
            tuesday:{
                name: 'Tuesday',
                slots:{
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110:{
                        time: '11:00am',
                        booked: false
                    }
                }
            }
        });
    };
    
    //create sync object
    var syncObject = fb.$asObject();
    
    
    //3-way data binding
    syncObject.$bindTo($scope, 'days');
    
});