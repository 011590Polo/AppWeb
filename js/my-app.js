//// Initialize your app
//var myApp = new Framework7();
//
//// Export selectors engine
//var $$ = Dom7;
//
//// Add view
//var mainView = myApp.addView('.view-main', {
//    // Because we use fixed-through navbar we can enable dynamic navbar
//    dynamicNavbar: true
//});
//
//// Callbacks to run specific code for specific pages, for example for About page:
//myApp.onPageInit('about', function (page) {
//    // run createContentPage func after link was clicked
//    $$('.create-page').on('click', function () {
//        createContentPage();
//    });
//});
//
//// Generate dynamic page
//var dynamicPageIndex = 0;
//function createContentPage() {
//	mainView.router.loadContent(
//        '<!-- Top Navbar-->' +
//        '<div class="navbar">' +
//        '  <div class="navbar-inner">' +
//        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
//        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
//        '  </div>' +
//        '</div>' +
//        '<div class="pages">' +
//        '  <!-- Page, data-page contains page name-->' +
//        '  <div data-page="dynamic-pages" class="page">' +
//        '    <!-- Scrollable page content-->' +
//        '    <div class="page-content">' +
//        '      <div class="content-block">' +
//        '        <div class="content-block-inner">' +
//        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
//        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
//        '        </div>' +
//        '      </div>' +
//        '    </div>' +
//        '  </div>' +
//        '</div>'
//    );
//	return;
//}


        $(function () {
            
            
            
            
            
            
            $("#submit").click(function () {
                alert("DENTRO");
                console.log("IJI");
                $.ajax({
                    url: "/Traslados/ConsultarTraslado",
                    method:'POST',
                    success: function (result) {
                         console.log(result);
                    }
                });
//                $.post('/Traslados/ConsultarTraslado', { id_no_orden: $('#query').val()}, function (result) {
//                    console.log(result);
//                    $("#table tbody").empty();
//                    for (var i = 0; i < result.data.length; i++) {
//                        var data=result.data[i];
//                        $("#table tbody").append('<tr> <td>' + data.cod_rbdo + '</td> <td>' + data.cantidad + '</td> <td>' + data.id_no_orden + '</td> </tr>')
//                    }
//                });
            });
        });


 

$(document).ready(function(){
	$("input[name=nombre1]").click(function(){
		alert('Evento click sobre un input text con nombre="nombre1"');
	});
    //$("#nombre2").click(function(){
	$("input[id=nombre2]").click(function(){
		alert('Evento click sobre un input text con id="nombre2"');
	});
    //$(".nombre3").click(function(){
	$("input[class=nombre3]").click(function(){
	    alert('Evento click sobre un button con class="nombre3"');
	});
});




var myApp = new Framework7({
modalTitle: "Control"
});
var $$ = Dom7;
var mainView = myApp.addView('.view-main');
$(function(){
$('#form-login').click(function(){
    e.preventDefault();
        alert("BN");

    myApp.showPreloader();

//    var form_url = $(this).attr('action');
//    var form_data = $(this).serialize();
//
//    var form_ajax = $.ajax({
//        url: form_url,
//        type: 'POST',
//        dataType: 'json',
//        data: form_data
//    });
//
//    form_ajax.done(function(response){              
//        if(response.result === 'success'){
//            mainView.router.loadPage({url:'home.html', ignoreCache:true, reload:true});
//            mainView.router.refreshPage();
//        }else{
//            myApp.alert('Sus datos de accesos son incorrectos, intente nuevamente.', _APP_TITLE);
//        }
//    });
//
//    form_ajax.fail(function() {
//        myApp.alert('Error al intentar iniciar sesión', _APP_TITLE);
//    });
//
//    form_ajax.always(function() {
//        myApp.hidePreloader();
//    });
});
});