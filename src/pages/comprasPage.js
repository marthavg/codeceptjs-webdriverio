const comprasLocator = require("../locators/compraLocator");
const { I } = inject();

module.exports = {

    async agregarProducto(){
        try {
            I.fillField(comprasLocator.fields.INGRESAR_BUSQUEDA,"Hervidores");
            I.wait(2);
            await I.click(comprasLocator.fields.BUSCAR);
            I.wait(2);
            I.fillField(comprasLocator.fields.INGRESAR_MARCA,"Oster");
            I.wait(3);
            
            await I.click(comprasLocator.fields.SELECCIONAR_MARCA);
            I.wait(3);

            I.waitForElement(comprasLocator.fields.BOTON_BUSCAR_FILTRO,10);
            await I.click(comprasLocator.fields.BOTON_BUSCAR_FILTRO);
            I.wait(5);
           
            I.click(comprasLocator.fields.SELECCIONAR_PRODUCTO);
            I.wait(5);
            
            I.click(comprasLocator.fields.BOTON_AGREGAR_BOLSA);
            I.wait(2);
            
            I.click(comprasLocator.fields.BOTON_CONTINUAR_GARANTIA);
            I.wait(5);
            
            I.click(comprasLocator.fields.BOLSA);
            I.wait(5);
             
            I.click(comprasLocator.fields.BOTON_IR_BOLSA);
            I.wait(5);
            
        } catch (error) {
            console.log('Error en comprasPage - ',error)
        }

    }
}