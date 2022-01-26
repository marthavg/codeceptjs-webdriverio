const { I } = inject();
module.exports ={
    fields: {
        INICIAR_SESION: `//*[@id="ripley-sticky-header"]/section/nav/ul/li[2]/div/div/a/span`,
        CORREO_ELECTRONICO: `//*[@id="ripley-sticky-header"]/section/nav/ul/li[2]/div/div/div/div/div/div/div/div/div[1]/form/div/div[1]/input`,
        CONTRASEÑA: `//*[@id="ripley-sticky-header"]/section/nav/ul/li[2]/div/div/div/div/div/div/div/div/div[1]/form/div/div[2]/div/input`,
        BOTON_INGRESAR: `//*[@id="ripley-sticky-header"]/section/nav/ul/li[2]/div/div/div/div/div/div/div/div/div[1]/form/div/div[4]/div/button`,

        NOMBRE_USUARIO: `//*[@id="ripley-sticky-header"]/section/nav/ul/li[2]/div/div/div/div/div/div/div/div/div/ul/li[1]/h3`
       
    }
}