var myApp = new Framework7();
var $$ = Dom7;

$$('#entrar').on('click', function () {
    window.location.href = "http://192.168.0.101/APPWEB/DIST/login.php";
});

$$('#registrar').on('click', function () {
    window.location.href = "http://192.168.0.101/APPWEB/DIST/register.php";
});

$(document).ready(function () {
    $("#submit-registrar").click(function () {
        $.post('process/process.php?c=1', {nombre: $('#nombre').val(), correo: $('#correo').val(), celular: $('#celular').val(), fecha: $('#fecha').val(), password: $('#password').val()},
        function (result) {
            myApp.alert('Registro Correcto', 'Notificacion', function () {
                window.location.href = "http://192.168.0.101/APPWEB/DIST/login.php";
            });
            console.log(result);
//                        $("#table tbody").empty();
//                        for (var i = 0; i < result.data.length; i++) {
//                            var data = result.data[i];
//                            $("#table tbody").append('<tr> <td>' + data.cod_rbdo + '</td> <td>' + data.cantidad + '</td> <td>' + data.id_no_orden + '</td> </tr>')
//                        }
        });
    });


    $("#submit-entrar").click(function () {        
        $.post('process/process.php?c=2', {nombre: $('#nombre').val(), password: $('#password').val()},
        function (result) {            
            if(result.success)
            {
                myApp.alert('hola '+': '+ $('#nombre').val(), 'Notificacion', function () {
                    window.location.href = "http://192.168.0.101/APPWEB/DIST/home.php";
                        });
            }else
            {                
                 myApp.alert('Datos Incorrectos ', 'Notificacion', function () {
                    window.location.href = "http://192.168.0.101/APPWEB/DIST/login.php";
                        });
            }
           

//                        myApp.alert('Registro Correcto', 'Notificacion', function () {
//                            window.location.href = "http://localhost/APPWEB/DIST/login.php";
//                        });
            //console.log(result);
//                        $("#table tbody").empty();
//                        for (var i = 0; i < result.data.length; i++) {
//                            var data = result.data[i];
//                            $("#table tbody").append('<tr> <td>' + data.cod_rbdo + '</td> <td>' + data.cantidad + '</td> <td>' + data.id_no_orden + '</td> </tr>')
//                        }
        });
    });


});

