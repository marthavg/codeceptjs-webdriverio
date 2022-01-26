Feature: Login

Scenario: El usuario inicia sesión correctamente.
Given navego a la pagina de inicio
When ingreso mi usuario y contraseña
Then deberia mostrarme el nombre de mi usuario
