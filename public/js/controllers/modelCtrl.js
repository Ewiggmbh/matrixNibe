define(['./module', 'jquery', 'jquery-ui', 'materialize'], function (controllers, $) {
    'use strict';

    controllers.controller('modelCtrl', ['$scope','heatPumpService', 'systemService', function ($scope, heatPumpService, systemService) {






   $(".main").on("mousemove", function(){



        });





        $(document).ready(function() {
            $( "#tabs" ).tabs();
            $('select').material_select();
            $('nav').css( {"padding-left" : "300px"} );
        });

        $(document).ready(function(){
            $("#carus").on("click", function(){
                $('nav').css( {"padding-left" : "0px"} )
                $('.carousel').carousel({indicators: true});
                $("#slide-out").hide();
                $(".progress").hide();
                $(".main").css({"padding": "0px"});
                $("#spisok").on("click", function(){
                    $("#slide-out").show();
                    $(".main").css({"padding-left": "300px"});
                });
            });
            $("#spisok").on("click", function(){
                $('nav').css( {"padding-left" : "300px"} )

            });
        });




        heatPumpService.getAllPump().then(function (result) {

            $scope.geo = result;
            $scope.$apply();


        });


        $( function() {


            $( "#slider-range" ).slider({
                range: true,
                min: 0,
                max: 70,
                values: [ 5, 60 ],
                slide: function( event, ui ) {
                    $( "#power" ).val( ui.values[ 0 ] + " кВт -" + ui.values[ 1 ] + " кВт " );
                }

            });
            $( "#power" ).val( $( "#slider-range" ).slider( "values", 0 ) + " кВт -" +
                $( "#slider-range" ).slider( "values", 1 ) + " кВт " );


        } );


        $( function() {


            $( "#slider-range2" ).slider({
                range: true,
                min: 4000,
                max: 25000,
                values: [ 5000, 24000 ],
                slide: function( event, ui ) {
                    $( "#price" ).val( ui.values[ 0 ] + " euro -" + ui.values[ 1 ] + " euro " );
                }

            });
            $( "#price" ).val( $( "#slider-range2" ).slider( "values", 0 ) + " euro -" +
                $( "#slider-range2" ).slider( "values", 1 ) + " euro " );


        } );











        $scope.changePower = function() {
            $scope.changePump();
        };


        $scope.changePump = function () {


            var filter1;
            var filter2 = {
                power: {
                    $gte: $("#slider-range").slider("values", 0),
                    $lte: $("#slider-range").slider("values", 1)
                }
            };
            var filter3 = {
                cost: {
                    $gte: $("#slider-range2").slider("values", 0),
                    $lte: $("#slider-range2").slider("values", 1)
                }
            };

            $scope.sort = $('select').val();
            var filter4;

            if ($('select').val() == 1) {
                filter4 = {$sort: {cost: 1}}
            } else if ($('select').val() == 2) {
                filter4 = {$sort: {power: 1}}
            } else if ($('select').val() == 3) {
                filter4 = {$sort: {model: 1}}
            }



                if ($scope.WaterHeater && $scope.onefase && $scope.BuiltInPC && $scope.BoilerR && $scope.Invertor) {
                filter1 = {"waterHeater": true, "onefase": true, "builtInPC": true, "boilerR": true, "invertor": true};
            } else if ($scope.WaterHeater && $scope.onefase && $scope.BuiltInPC && $scope.Invertor) {
                filter1 = {"waterHeater": true, "onefase": true, "builtInPC": true, "invertor": true};
            } else if ($scope.WaterHeater && $scope.onefase && $scope.BuiltInPC && $scope.Invertor) {
                filter1 = {"waterHeater": true, "onefase": true, "builtInPC": true, "invertor": true};
            } else if ($scope.WaterHeater && $scope.onefase && $scope.BuiltInPC && $scope.BoilerR) {
                filter1 = {"waterHeater": true, "onefase": true, "builtInPC": true, "boilerR": true};
            } else if ($scope.WaterHeater && $scope.BuiltInPC && $scope.Invertor) {
                filter1 = {"waterHeater": true, "builtInPC": true, "invertor": true};
            } else if ($scope.WaterHeater && $scope.onefase && $scope.BuiltInPC) {
                filter1 = {"waterHeater": true, "onefase": true, "builtInPC": true};
            } else if ($scope.WaterHeater && $scope.BoilerR && $scope.Invertor) {
                filter1 = {"waterHeater": true, "boilerR": true, "invertor": true};
            } else if ($scope.WaterHeater && $scope.onefase && $scope.Invertor) {
                filter1 = {"waterHeater": true, "onefase": true, "invertor": true};
                } else if ($scope.invertor && $scope.BoilerR && $scope.WaterHeater) {
                    filter1 = {"invertor": true, "boilerR": true};
            } else if ($scope.WaterHeater && $scope.onefase) {
                filter1 = {"waterHeater": true, "onefase": true};
            } else if ($scope.WaterHeater && $scope.Invertor) {
                filter1 = {"waterHeater": true, "invertor": true};
            } else if ($scope.onefase && $scope.Invertor) {
                filter1 = {"onefase": true, "invertor": true};
            } else if ($scope.BuiltInPC && $scope.onefase) {
                filter1 = {"builtInPC": true, "onefase": true};
                } else if ($scope.BuiltInPC && $scope.WaterHeater) {
                    filter1 = {"builtInPC": true, "waterheater": true};
            } else if ($scope.WaterHeater && $scope.cheap) {
                filter1 = {"waterHeater": true, "cheap": true};
            } else if ($scope.WaterHeater && $scope.BoilerR) {
                filter1 = {"waterHeater": true, "boilerR": true};
                } else if ($scope.WaterHeater) {
                filter1 = {"waterHeater": true};
            } else if ($scope.onefase) {
                filter1 = {"onefase": true}
            } else if ($scope.BuiltInPC) {
                filter1 = {"builtInPC": true};
            } else if ($scope.BoilerR) {
                filter1 = {"boilerR": true};
            } else if ($scope.Invertor) {
                filter1 = {"invertor": true};
            } else if ($scope.twocompressor) {
                filter1 = {"twocompressor": true};

            } else if ($scope.cheap) {
                filter1 = {"cheap": true};

            }
            else {
                filter1 = {};
            }
            var filter = Object.assign({}, filter1, filter2, filter3, filter4);

            $scope.filter = filter;

            $scope.$emit('myevent', filter);

        };

        /*

        $scope.pleaseMe = function(index) {

            var jqind ="#" + index + " span:first";
            var jqind2 ="#p" + index;
            $scope.curentPumpp = $(jqind).text();
            var curentPump = $(jqind).text();
            $(jqind2).removeClass("hide");




            $(".main").on("mousemove", function(){
                $( function() {
                    $( "#cell-container div.draggable" ).draggable({ revert: "valid" });
                    $( "#draggable2" ).draggable({ revert: "invalid" });

                    $( "#droppable" ).droppable({
                        classes: {
                            "ui-droppable-active": "ui-state-active",
                            "ui-droppable-hover": "ui-state-hover"
                        },
                        drop: function( event, ui ) {
                            $( this )
                                .addClass( "ui-state-highlight" )
                                .find( "p" )
                                .html( "Вы выбрали тепловой насос!" )
                                .append("<a href='//{{curentPumpp}}'>Далее</a>")
                        }
                    });
                } );

            });


        };


*/


        $scope.pleaseMe = function(index) {
            var jqind ="#" + index + " span:first";
            $scope.curentPump = $(jqind).text();
            var curentPump = $(jqind).text();

            heatPumpService.getAllPump({"id": $scope.curentPump}).then(function (result) {

                $scope.current = result;
                $scope.info = "Вы выбрали NIBE F" + $scope.current.model + "-" + $scope.current.power
                $scope.$apply();

            });



            systemService.newSystem({system: {mypump: $scope.current}}).then(function (result) {

                    $scope.id = result.id;
                    $scope.$apply();
                });


        };



        $(".main").on("mousemove", function(){
            $( function() {
                $( "#cell-container div.draggable" ).draggable({ revert: "valid" });
                $( "#draggable2" ).draggable({ revert: "invalid" });

                $( "#droppable" ).droppable({

                    classes: {
                        "ui-droppable-active": "ui-state-active",
                        "ui-droppable-hover": "ui-state-hover"
                    },
                    drop: function( event, ui ) {
                        $( this )
                            .addClass( "ui-state-highlight" )
                            .find( "p" )
                            .html( "Вы выбрали тепловой насос!" );
                        $("#show").removeClass("hide")
                    }
                });
            } );

        });




        $scope.$on('myevent', function(event, filter) {

            heatPumpService.getAllPump(filter).then(function (result) {

                $scope.geo = result;
                $scope.$apply();

            });


        });












    }]);
});





