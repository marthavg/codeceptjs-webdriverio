const loguearLocator = require("../locators/loguearLocator");
const conf = require("../config");
const { I } = inject();

module.exports = {

    iniciarSesion(){
        I.click(loguearLocator.fields.INICIAR_SESION);
        I.wait(2);
        I.fillField(loguearLocator.fields.CORREO_ELECTRONICO, conf.DNI);
        I.fillField(loguearLocator.fields.CONTRASEÑA, conf.CONTRASENIA);
        I.click(loguearLocator.fields.BOTON_INGRESAR);
        I.wait(2);
    }
}