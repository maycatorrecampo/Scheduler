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
            d01:{
                name: 'Monday',
                slots:{
                    1100: {
                        time: '11:00am',
                        booked: false
                    },
                    1400: {
                        time: '02:00pm',
                        booked: false
                    },
                    1700: {
                        time: '05:00pm',
                        booked: false
                    },
                    2000: {
                        time: '08:00pm',
                        booked: false
                    }
                }
            },
            d02:{
                name: 'Tuesday',
                slots:{
                    1100: {
                        time: '11:00am',
                        booked: false
                    },
                    1400: {
                        time: '02:00pm',
                        booked: false
                    },
                    1700: {
                        time: '05:00pm',
                        booked: false
                    },
                    2000: {
                        time: '08:00pm',
                        booked: false
                    }
                }
            },
            d03:{
                name: 'Wednesday',
                slots:{
                    1100: {
                        time: '11:00am',
                        booked: false
                    },
                    1400: {
                        time: '02:00pm',
                        booked: false
                    },
                    1700: {
                        time: '05:00pm',
                        booked: false
                    },
                    2000: {
                        time: '08:00pm',
                        booked: false
                    }
                }
            },
            d04:{
                name: 'Thursday',
                slots:{
                    1100: {
                        time: '11:00am',
                        booked: false
                    },
                    1400: {
                        time: '02:00pm',
                        booked: false
                    },
                    1700: {
                        time: '05:00pm',
                        booked: false
                    },
                    2000: {
                        time: '08:00pm',
                        booked: false
                    }
                }
            },
            d05:{
                name: 'Friday',
                slots:{
                    1100: {
                        time: '11:00am',
                        booked: false
                    },
                    1400: {
                        time: '02:00pm',
                        booked: false
                    },
                    1700: {
                        time: '05:00pm',
                        booked: false
                    },
                    2000: {
                        time: '08:00pm',
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