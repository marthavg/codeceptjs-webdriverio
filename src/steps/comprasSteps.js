const compraPagina = require("../pages/comprasPage");
const compraLocator = require("../locators/compraLocator");
const { I } = inject();

When('busco un producto desde el buscador y lo agrego a la bolsa', async ()=>{
    I.wait(2);
    try {
        await compraPagina.agregarProducto();
        
    } catch (error) {
        console.log('error',error);
    }
});

Then('visualizo el producto', async ()=>{
    try {
        const descProducto = await I.grabTextFrom(compraLocator.fields.NOMBRE_PRODUCTO_BOLSA);
        const nombreProducto = descProducto.split('\n');
        I.assertEqual('OSTER HERVIDOR ELÉCTRICO BVSTKT3177W 1.7L', nombreProducto[0]);
        I.wait(5);
        
    } catch (error) {
        console.log('error',error);
    }
});