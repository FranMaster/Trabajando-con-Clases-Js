
let motorNuevo;

function main() {
    motorNuevo = new EngineFuctionalPage(
        document.getElementById('colorCuadro'),
        document.getElementById('textoCuadro'),
        document.getElementById('cuadro')
    )
    
    document.getElementById('btnEjecutar').addEventListener('click',Ejecuta )
}

function Ejecuta() {
    motorNuevo.ejecutar()
}

window.onload=main
