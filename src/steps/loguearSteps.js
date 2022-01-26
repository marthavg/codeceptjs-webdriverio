const loguearPagina = require("../pages/loguearPage");
const loguearLocator = require("../locators/loguearLocator");
const conf = require("../config");
const { I } = inject();

Given('navego a la pagina de inicio',()=>{
    I.amOnPage('/'),
    I.wait(2);
});

When('ingreso mi usuario y contraseña',() => {
    I.wait(2);
    loguearPagina.iniciarSesion();

});

Then('deberia mostrarme el nombre de mi usuario', async ()=>{
    try {
        I.wait(2);
        const usuario = await I.grabTextFrom(loguearLocator.fields.NOMBRE_USUARIO);

        I.assertEqual(conf.NOMBRE, usuario);
        I.wait(5);
        
    } catch (error) {
        console.log('error',error);
    }
});
