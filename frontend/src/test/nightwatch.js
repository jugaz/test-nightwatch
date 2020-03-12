//Ruta en dond se guarda las imagenes
var routeImages = './build/tests/images-';

//Crear Carpeta 
var mkdirp = require('mkdirp');



mkdirp('/build/tests/images'+ dateFormat, function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});

//Contador
var count = 1;

//Fecha
var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();
var year = d.getFullYear();

// Forrmato de Fecha
var dateFormat = day + "-" + month + "-" + year + "-" + count++;

// Nueva Ruta
var routeformat = routeImages + dateFormat + ".png"



module.exports = {
    'test search': function (browser) {
        browser
            .url('https://www.solven.pe/')
            .maximizeWindow()
            .waitForElementPresent('body', 2000)
            .pause(2000)
                .waitForElementVisible('body', 1000)
                .execute(function () {
                    $(window).scrollTop($('body').offset().top - ($(window).height() / 2));
                }, [])
                .saveScreenshot(routeformat)
            .pause(2000)
                .waitForElementVisible('.sec-workus', 1000)
                .execute(function () {
                    $(window).scrollTop($('.sec-workus').offset().top - ($(window).height() / 2));
                }, [])
                .saveScreenshot(routeformat)
            .pause(2000)
            .end();
    }
};

