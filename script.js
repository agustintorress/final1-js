alert("Bienvenido a OmochaARG")
alert("Estos son los productos que tenemos para usted: BNHA(Deku, All Might), Solo Leveling(Jinwoo), Bleach(Ichigo), One Piece(Luffy, Zoro)")

class Figura {
    constructor(id, nombre, modelo, tamaño, precio) {
        this.id = id
        this.nombre = nombre
        this.modelo = modelo
        this.tamaño = tamaño
        this.precio = precio
    }
}

const figura1 = new Figura(1, "BNHA", "Deku", "Mediano", 4500) 
const figura2 = new Figura(2, "BNHA", "All Might", "Grande", 8500) 
const figura3 = new Figura(3, "Solo leveling", "Jinwoo", "Mediano", 3800) 
const figura4 = new Figura(4, "Bleach", "Ichigo", "Mediano", 5000) 
const figura5 = new Figura(5, "One Piece", "Luffy", "Grande", 10000) 
const figura6 = new Figura(6, "One Piece", "Zoro", "Mediano", 6500) 

const arrayFiguras = [figura1, figura2, figura3, figura4, figura5, figura6]


function buscarFigura(arrayFiguras) {
    let nombreFigura = prompt("Ingrese el nombre de la figura")
    
    let figuraEncontrada = arrayFiguras.find(figura => figura.nombre == nombreFigura)

        if(figuraEncontrada == undefined) {
            alert("Figura no encontrada")
        } else {
            console.log(figuraEncontrada)
        }
}

function buscarModelo(arrayFiguras) {
    let nombreModelo = prompt("Ingrese el nombre del modelo")
    
    let modeloEncontrado = arrayFiguras.find(modelo => modelo.modelo == nombreModelo)

        if(modeloEncontrado == undefined) {
            alert("Modelo no encontrado")
        } else {
            console.log(modeloEncontrado)
        }
}

function precioIVA(arrayFiguras) {
    let nombreFigura = prompt("Ingrese el nombre de la figura")
    let nombreModelo = prompt("Ingrese el nombre del modelo")
    
    let figuraEncontrada = arrayFiguras.find(figura => figura.nombre == nombreFigura && figura.modelo == nombreModelo)

    let precioIVA = parseFloat(figuraEncontrada.precio * 1.21)

        if(figuraEncontrada == undefined){
            alert("No existe esa figura, no se puede comprobar el precio final")
        } else {
            alert(`El precio final con IVA es de: $ ${precioIVA}`)
        }
}


let respuesta

do{
    respuesta = parseInt(prompt(`Ingrese un numero segun la lista de abajo:
    1. Buscar una figura
    2. Buscar por modelo
    3. Buscar precio con IVA
    4. Terminar la consulta`))
}while(respuesta < 1 || respuesta > 4)

switch(respuesta){
    case 1:
        buscarFigura(arrayFiguras)
    break
    
    case 2:
        buscarModelo(arrayFiguras)
    break
    
    case 3:
        precioIVA(arrayFiguras)
    break
    
    case 4:
        alert("Muchas gracias por habernos visitado")
    break

    default:
        alert("Opción no válida")
    break
}

