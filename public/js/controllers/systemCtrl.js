define(['./module', 'jquery', 'jquery-ui', 'jqueryEasing', 'materialize', 'ui.widget'], function (controllers, $) {
    'use strict';

    controllers.controller('systemCtrl', ['$scope', 'heatPumpService', 'descService', 'priceService', 'systemService', 'fileService', '$stateParams', function ($scope, heatPumpService, descService, priceService, systemService, fileService, $stateParams) {


        Materialize.updateTextFields();



        $(document).ready(function() {

            $('select').material_select();
            $('input#input_text, textarea#textarea1').characterCounter();
        });




var files = [];


        $('.alert-success').hide();

        $scope.fileNameChanged = function(element) {
            console.log('file:', element.files);
            // Turn the FileList object into an Array
            var file = element.files[0];


            $scope.uploadFiles = function () {


                var fd = new FormData();
                fd.append("uploadedFile", file);



                var subdir = $('#subdir').val();
                    var comments = $('#comments').val();
                    var uniqueFilename = $('#uniqueFilename').prop('checked');
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', '/upload?subdir=' + subdir + '&comments=' + comments + '&uniqueFilename=' + uniqueFilename);
                    xhr.onload = function() {
                        var response = JSON.parse(this.responseText);
                        console.log(response);
                        if (this.status < 300) {
                            $('.alert-success').append("Upload successful!<br />");


                            $scope.$emit('myevent', response);

                            $("#resizePic").resizable({handles: "se"});
                            $("#draggable38").draggable();
                            Materialize.toast('загружено!', 4000);
                            Materialize.toast('Вы можете редактировать размер картинки и ее положение', 4000);



                        } else {
                            alert(response.message);
                        }
                    };
                    xhr.onerror = function(err) {
                        alert("Error: ", err);
                    };
                    xhr.send(fd);

            };

        };






        $scope.$on('myevent', function(event, response) {



            var id = response[0].id;

            fileService.getPhoto({"id": id}).then(function (result) {
                $scope.photo = "/" + result.subdir + "/" + result.filename;
                $scope.$apply();

            });




            $scope.$apply();


        });





       $scope.somethings = [{
        cost : "стоимость",
        model : "модель",
        brand : "БРЕНД",
        description : "Описание продукта",
           whatis : "ЧТО ЭТО ТАКОЕ"
    }];


  $scope.addOwn = function () {

      $scope.somethings.push({
          cost : "стоимость",
          model : "модель",
          brand : "БРЕНД",
          description : "Описание продукта",
          whatis : "ЧТО ЭТО ТАКОЕ"})


  };








        $scope.col = 1;
        $scope.chooseAcc = function (index) {

            $("#draggable18").draggable();
            $("#draggable19").draggable();
            $("#draggable20").draggable();
            $("#draggable21").draggable();
            $("#draggable22").draggable();
            $("#draggable23").draggable();
            $("#draggable24").draggable();
            $("#draggable25").draggable();
            $("#draggable26").draggable();
            $("#draggable27").draggable();
            $("#draggable28").draggable();
            $("#draggable29").draggable();
            $("#draggable30").draggable();
            $("#draggable31").draggable();
            $("#draggable32").draggable();
            $("#draggable33").draggable();
            $("#draggable34").draggable();
            $("#draggable35").draggable();
            $("#draggable36").draggable();
            $("#draggable37").draggable();
            $("#draggable39").draggable();
            $scope.AccInd = index;
            var jqind = "#" + index + " span:first";
            var jqind2 = "#" + index + " span:last";
            var jqind3 = "#" + "b" + index + " span:first";
            var jqind4= "#" + "b" + index + " span:last";
            var jqind5= "#" + "print" + index;
            var jqind6= "#" + "printb" + index;
            var jqind7= "#" + "o" + index + " span:last";
            var jqind8= "#" + "o" + index + " span:first";
            var jqind9= "#" + "printo" + index;
            var curentAcc = $(jqind).text();
            var own = $(jqind7).text();
            var curentPrice = parseInt($(jqind2).text(), 10);
            $scope.currentBoiler = $(jqind3).text();
            var curentBoilPrice = parseInt($(jqind4).text(), 10);
            var curentOwnPrice = parseInt($(jqind7).text(), 10);
            $scope.test = curentAcc;
            $scope.myPump = $("#pump").text();


            $scope.useItBoil = function () {

                $(jqind6).clone().appendTo("#page1-div");
                Materialize.toast('добавлен бойлер!', 4000);
                var col = 1;
                var i = 0;


                var curr = $(jqind3).text();

                if ($("#spisok:contains('" + curr + "')").text()) {

                    var coli = parseInt($("#table tr:contains('" + curr + "') td:nth-child(3)").text(), 10);
                    $("#table tr:contains('" + curr + "') td:nth-child(3)").text(coli + 1);
                    var coli = parseInt($("#table tr:contains('" + curr + "') td:nth-child(3)").text(), 10);
                    $("#table tr:last td:nth-child(5)").text(curentBoilPrice * coli);


                } else {

                    var sorter = parseInt($("#table tr:last td:nth-child(1)").text(), 10);
                    $("#table").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>");

                    var trId = "some" + sorter;
                    $("#table tr:last").attr("id", trId);
                    $("#table tr:last").attr("class", "connectedSortable");
                    $("#table tr:last td:nth-child(1)").text(sorter+1);

                    $("#table tr:last td:nth-child(2)").html("<a></a>");
                    $("#table tr:last td:nth-child(2) a").attr({"href":"#", "editable-text":"currentBoiler", "ng-model":"currentBoiler"});
                    $("#table tr:last td:nth-child(2) a").text($scope.currentBoiler);



                    $("#table tr:last td:nth-child(3)").text(col);
                    $("#table tr:last td:nth-child(4)").text(curentBoilPrice);
                    $("#table tr:last td:nth-child(5)").text(curentBoilPrice * col);
                    $("#table tr:last td:nth-child(6)").html("<button>Удалить бойлер</button>");
                    $("#table tr:last td:nth-child(6) :button").addClass('waves-effect waves-light btn noPrint').css({"position":"absolute","left":"780px"});

                    var currentInd =  $("#table tr:last td:nth-child(1)").text();
                    var currentIndex = "acc" +  currentInd;

                    $("#table tr:last td:nth-child(6) :button").attr("id", currentIndex);


                    var currentID = "tr:has(#" + currentIndex + ")";
                    var currentButton = "#" +  currentIndex;
                    $( currentButton).click(function(){


                        $(currentID).css({"display":"none"});
                    });




                }

            };



            $scope.useItWork = function () {

                Materialize.toast('добавлены работы!', 4000);

                if ($("#spisok:contains('Стоимость работ по монтажу топочной')").text()) {


                }

                else {
                    var work = parseInt($("#work").text(), 10);
                    var sorter = parseInt($("#table tr:last td:nth-child(1)").text(), 10);
                    $("#table").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
                    var trId = "some" + sorter;
                    $("#table tr:last").attr("id", trId);
                    $("#table tr:last td:nth-child(1)").text(sorter + 1);
                    $("#table tr:last td:nth-child(2)").text("Стоимость работ по монтажу топочной");
                    $("#table tr:last td:nth-child(3)").text("1 комплект");
                    $("#table tr:last td:nth-child(5)").text(work);
                    $("#table tr:last td:nth-child(6)").html("<button>Удалить работу</button>");
                    $("#table tr:last td:nth-child(6) :button").addClass('waves-effect waves-light btn noPrint').css({"position":"absolute","left":"780px"});
                    var currentInd = $("#table tr:last td:nth-child(1)").text();
                    var currentIndex = "acc" + currentInd;
                    $("#table tr:last td:nth-child(6) :button").attr("id", currentIndex);
                    var currentID = "tr:has(#" + currentIndex + ")";
                    var currentButton = "#" +  currentIndex;
                    $(currentButton).click(function () {
                        $(currentID).remove();
                    });

                }

            };






            $scope.useItMat = function () {

                Materialize.toast('добавлены обвязочные материалы!', 4000);

                if ($("#spisok:contains('Стоимость обвязочных материалов')").text()) {


                }

                else {
                    var work = parseInt($("#mat").text(), 10);
                    var sorter = parseInt($("#table tr:last td:nth-child(1)").text(), 10);
                    $("#table").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
                    var trId = "some" + sorter;
                    $("#table tr:last").attr("id", trId);
                    $("#table tr:last td:nth-child(1)").text(sorter + 1);
                    $("#table tr:last td:nth-child(2)").text("Стоимость обвязочных материалов");
                    $("#table tr:last td:nth-child(3)").text("1 комплект");
                    $("#table tr:last td:nth-child(5)").text(work);
                    $("#table tr:last td:nth-child(6)").html("<button>Удалить работу</button>");
                    $("#table tr:last td:nth-child(6) :button").addClass('waves-effect waves-light btn noPrint').css({"position":"absolute","left":"780px"});
                    var currentInd = $("#table tr:last td:nth-child(1)").text();
                    var currentIndex = "acc" + currentInd;
                    $("#table tr:last td:nth-child(6) :button").attr("id", currentIndex);
                    var currentID = "tr:has(#" + currentIndex + ")";
                    var currentButton = "#" +  currentIndex;
                    $(currentButton).click(function () {
                        $(currentID).remove();
                    });

                }

            };





            $scope.useItAcc = function () {



                $(jqind5).clone().appendTo("#page1-div");

                Materialize.toast('добавлен аксессуар!', 4000);


                var col = 1;
                var i = 0;

                var curr = $(jqind).text();

                if ($("#spisok:contains('" + curr + "')").text()) {

                    var coli = parseInt($("#table tr:contains('" + curr + "') td:nth-child(3)").text(), 10);
                    $("#table tr:contains('" + curr + "') td:nth-child(3)").text(coli + 1);
                    var coli = parseInt($("#table tr:contains('" + curr + "') td:nth-child(3)").text(), 10);
                    $("#table tr:last td:nth-child(5)").text(curentPrice * coli);


                } else {

                    var sorter = parseInt($("#table tr:last td:nth-child(1)").text(), 10);
                    $("#table").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
                    var trId = "some" + sorter;
                    $("#table tr:last").attr("id", trId);
                    $("#table tr:last td:nth-child(1)").text(sorter+1);
                    $("#table tr:last td:nth-child(2)").text(curentAcc);
                    $("#table tr:last td:nth-child(3)").text(col);
                    $("#table tr:last td:nth-child(4)").text(curentPrice);
                    $("#table tr:last td:nth-child(5)").text(curentPrice * col);
                    $("#table tr:last td:nth-child(6)").html("<button>Удалить</button>");
                    $("#table tr:last td:nth-child(6) :button").addClass('waves-effect waves-light btn noPrint').css({"position":"absolute","left":"780px"});


                    var currentInd =  $("#table tr:last td:nth-child(1)").text();
                    var currentIndex = "acc" +  currentInd;

                    $("#table tr:last td:nth-child(6) :button").attr("id", currentIndex);


                    var currentID = "tr:has(#" + currentIndex + ")";
                    var currentButton = "#" +  currentIndex;
                    $(currentButton).click(function(){


                        $(currentID).css({"display":"none"});
                    });




                }


            };






        $scope.useItOwn = function () {



            $(jqind9).clone().appendTo("#page1-div");

            Materialize.toast('добавлен аксессуар!', 4000);


            var col = 1;
            var i = 0;

            var curr = $(jqind8).text();

            if ($("#spisok:contains('" + curr + "')").text()) {

                var coli = parseInt($("#table tr:contains('" + curr + "') td:nth-child(3)").text(), 10);
                $("#table tr:contains('" + curr + "') td:nth-child(3)").text(coli + 1);
                var coli = parseInt($("#table tr:contains('" + curr + "') td:nth-child(3)").text(), 10);
                $("#table tr:last td:nth-child(5)").text(curentPrice * coli);


            } else {

                var sorter = parseInt($("#table tr:last td:nth-child(1)").text(), 10);
                $("#table").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
                var trId = "some" + sorter;
                $("#table tr:last").attr("id", trId);
                $("#table tr:last td:nth-child(1)").text(sorter+1);
                $("#table tr:last td:nth-child(2)").text(curr);
                $("#table tr:last td:nth-child(3)").text(col);
                $("#table tr:last td:nth-child(4)").text(curentOwnPrice);
                $("#table tr:last td:nth-child(5)").text(curentOwnPrice * col);
                $("#table tr:last td:nth-child(6)").html("<button>Удалить</button>");
                $("#table tr:last td:nth-child(6) :button").addClass('waves-effect waves-light btn noPrint').css({"position":"absolute","left":"780px"});


                var currentInd =  $("#table tr:last td:nth-child(1)").text();
                var currentIndex = "acc" +  currentInd;

                $("#table tr:last td:nth-child(6) :button").attr("id", currentIndex);


                var currentID = "tr:has(#" + currentIndex + ")";
                var currentButton = "#" +  currentIndex;
                $(currentButton).click(function(){


                    $(currentID).css({"display":"none"});
                });




            }


        }

    };




        $scope.$watch('myPump', function () {

            descService.getDesc({"model": $scope.myPump}).then(function (result) {
                $scope.description = result;
                $scope.$apply();

            });

        });


        $(function () {
            $("#draggable").draggable();
            $("#draggable1").draggable();
            $("#draggable2").draggable();
            $("#draggable3").draggable();
            $("#draggable4").draggable();
            $("#draggable5").draggable();
            $("#draggable6").draggable();
            $("#draggable7").draggable();
            $("#draggable8").draggable();
            $("#draggable9").draggable();
            $("#draggable10").draggable();
            $("#draggable11").draggable();
            $("#draggable12").draggable();
            $("#draggable13").draggable();
            $("#draggable14").draggable();
            $("#draggable15").draggable();
            $("#draggable16").draggable();
            $("#draggable17").draggable();




        });


        $(function () {
            $("#sortablesecond1").sortable();


        });


        $(function () {
            $("#sortable1, #sortable2, #sortable3, #sortable4, #sortable5 , #sortable6, #sortable7, #sortable8, #sortable9, #sortable10, #table").sortable({
                connectWith: ".connectedSortable"
            }).disableSelection();
        });


        $(function () {

            $("#draggable4").resizable();
            $("#draggable5").resizable();

            $("#draggable7").resizable({handles: "se"});

        });


        $(document).ready(function () {

            $('nav').css({"padding-left": "300px"});
            $("#slide-out").on("click", function () {
                $('.carousel').carousel({indicators: true});
                $('.carousel').carousel('next', 3);
            });

            $('.collapsible').collapsible();
        });

        $scope.printToCart = function (printSectionId) {
            $("#page6-div").clone().appendTo("#page1-div");
            var innerContents = document.getElementById(printSectionId).innerHTML;
            var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWinindow.document.open();
            popupWinindow.document.write('<html><head><link type="text/css" rel="stylesheet" href="css/app.css" /><link type="text/css" rel="stylesheet" href="css/materialize.min.css" /><link rel="stylesheet" href="http://fonts.googleapis.com/icon?family=Material+Icons"></head><body onload="window.print()">' + innerContents + '</html>');
            popupWinindow.document.close();
        };


        systemService.getSystem($stateParams.systemId).then(function (result) {
            $scope.system = result;
            $scope.ouracces = $scope.system.system.mypump.accessorize;


            $scope.burenie = ($scope.system.system.mypump.power * 0.75 * 1000 / 45).toFixed(0);
            $scope.truba = ($scope.burenie * 3);
            $scope.rabotaBur = (($scope.burenie) / 60 * 140).toFixed(0);
            $scope.materialuBur = (($scope.burenie) / 60 * 155).toFixed(0);
            $scope.rassol = ($scope.truba * 0.25).toFixed(0);
            $scope.burCost = 4.5;
            $scope.glicCost = 2.5;
            $scope.pipeCost = 0.83;


            $scope.calc = function () {
                $scope.GeoVertPrice = ($scope.truba * $scope.pipeCost) + ($scope.rassol * $scope.glicCost) + ($scope.burenie * $scope.burCost) + ($scope.materialuBur * 1 + $scope.rabotaBur * 1);


                /* $scope.total = $(".print .badge:last").text();
                 $scope.delta = $(".print .badge:first").text(); */


            };


            $scope.$apply();
        });


        $scope.$watch('ouracces', function () {

            descService.getAcc({model: {$in: $scope.ouracces}}).then(function (result) {

                $scope.descacc = result;

                $scope.prodavec = "Продавец: ООО 'Тепловые насосы'";


                $scope.$apply();
            });

        });


        descService.getBoilers().then(function (result) {
            $scope.Boilers = result;
        });




        $scope.Acces = [
        ];




        // remove user
        $scope.removeAcc = function(index) {
            $scope.Acces.splice(index, 1);
        };

        // add user
        $scope.addAcc = function() {
            $scope.inserted = {

            };
            $scope.Acces.push($scope.inserted);
        };





    }]);
});









































