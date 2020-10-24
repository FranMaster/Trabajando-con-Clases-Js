//Esta clase controlara el fucionamiento del html
 class EngineFuctionalPage {

    constructor(color, texto, cuadro) {
        this.color = color
        this.texto = texto
        this.cuadro = cuadro
        this.cuadro.style.heigth='100px'
        this.cuadro.style.border="1px solid black"
    }

    ejecutar() {
        this.cuadro.style.backgroundColor = this.color.value
        this.cuadro.innerHTML = this.texto.value
    }

}
