//Ruta en dond se guarda las imagenes
var routeImages = './docs/test/images-';

//Crear Carpeta 
var mkdirp = require('mkdirp');



mkdirp('/docs/test/images' + dateFormat, function(err) {
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
    'test search': function(browser) {
        browser
            .url('https://www.solven.pe/')
            .maximizeWindow()
            .waitForElementPresent('body', 2000)
            .pause(2000)
            .saveScreenshot(routeformat)
            .end();
    }
};