function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    msg.innerHTML=`Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = 'linear-gradient(to right, #FFDEAD, #B0C4DE'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = 'linear-gradient(to right, #5F9EA0, #FFA07A'

    } else {
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = 'linear-gradient(to right, #363636, #778899'
    }
}

