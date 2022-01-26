Feature: Agregar producto

Scenario: Agrego un producto al carrito
Given navego a la pagina de inicio
And ingreso mi usuario y contraseña
When busco un producto desde el buscador y lo agrego a la bolsa
Then visualizo el producto