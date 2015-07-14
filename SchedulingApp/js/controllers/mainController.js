angular.module('scheduleApp')
//controller
.controller('mainController', [ '$scope', '$http', '$firebase', function($scope, $http, $firebase){
    //firebase connection
    var ref = new Firebase("https://intense-heat-2719.firebaseio.com/days");
    var fb = $firebase(ref);
    
    //Reset: set default data
    $scope.reset = function(){

        fb.$set({
            d01:{
                name: 'Monday',
                slots:{
                    1100: {
                        time: '11:00am',
                        booked: false,
                        pending: false
                    },
                    1400: {
                        time: '02:00pm',
                        booked: false,
                        pending: false
                    },
                    1700: {
                        time: '05:00pm',
                        booked: false,
                        pending: false
                    },
                    2000: {
                        time: '08:00pm',
                        booked: false,
                        pending: false
                    }
                }
            },
            d02:{
                name: 'Tuesday',
                slots:{
                    1100: {
                        time: '11:00am',
                        booked: false,
                        pending: false
                    },
                    1400: {
                        time: '02:00pm',
                        booked: false,
                        pending: false
                    },
                    1700: {
                        time: '05:00pm',
                        booked: false,
                        pending: false
                    },
                    2000: {
                        time: '08:00pm',
                        booked: false,
                        pending: false
                    }
                }
            },
            d03:{
                name: 'Wednesday',
                slots:{
                    1100: {
                        time: '11:00am',
                        booked: false,
                        pending: false
                    },
                    1400: {
                        time: '02:00pm',
                        booked: false,
                        pending: false
                    },
                    1700: {
                        time: '05:00pm',
                        booked: false,
                        pending: false
                    },
                    2000: {
                        time: '08:00pm',
                        booked: false,
                        pending: false
                    }
                }
            },
            d04:{
                name: 'Thursday',
                slots:{
                    1100: {
                        time: '11:00am',
                        booked: false,
                        pending: false
                    },
                    1400: {
                        time: '02:00pm',
                        booked: false,
                        pending: false
                    },
                    1700: {
                        time: '05:00pm',
                        booked: false,
                        pending: false
                    },
                    2000: {
                        time: '08:00pm',
                        booked: false,
                        pending: false
                    }
                }
            },
            d05:{
                name: 'Friday',
                slots:{
                    1100: {
                        time: '11:00am',
                        booked: false,
                        pending: false
                    },
                    1400: {
                        time: '02:00pm',
                        booked: false,
                        pending: false
                    },
                    1700: {
                        time: '05:00pm',
                        booked: false,
                        pending: false
                    },
                    2000: {
                        time: '08:00pm',
                        booked: false,
                        pending: false
                    }
                }
            }
        });
    };
    
    //Approve: update booking to true
    $scope.approve = function(){
        fb.$update({});
    };
    
    //Reject: update pending to false
    
    //create sync object
    var syncObject = fb.$asObject();
    
    
    //3-way data binding
    syncObject.$bindTo($scope, 'days');
    
}]);