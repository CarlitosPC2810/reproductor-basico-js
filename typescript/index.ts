// TIPOS DE DATOS !!!

// Boolean
let muted: boolean = true;
muted = false;

// numeros
let age = "6";
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// string
let nombre: string = "Richard";
let saludo = `me llamo ${nombre}`;

// arreglos
let people: string[]; // arreglo de string
people = ["Isabel", "Nicole", "Raul"];
//people.push("9000");

let peopleAndNumbers: Array<string | number> = []; // array de numeros y string
peopleAndNumbers.push("9000");
peopleAndNumbers.push(8000);

// Enum
enum Color {
    rojo = "rojo",
    verde = "verde",
    azul = "azul",
    amarillo = "amarillo"
};

let colorFavorito: Color = Color.amarillo;
console.log(`mi color favorito es ${colorFavorito}`);

// any
let comodin: any = "Joker"
comodin = { tyoe: "wilcard" };

// object
let someObject: object = { "type": "wilcard" };

// FUNCIONES !!!


function add(a: number, b: number): number {
    return a + b;
}

const suma = add(3, 2);


function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(3);
const fourPluse = addFour(4);

function fullName(firsName: string, lastName: string = "carrizal"): string {
    return `${firsName} ${lastName}`
}

const richard = fullName('carlos')
console.log(richard)

// INTERFACES !!!

enum Colores {
    rojo = "rojo",
    verde = "verde"
}

interface Rectangulo {
    ancho: number
    alto: number
    color?: Colores
}

let rec: Rectangulo = {
    ancho: 4,
    alto: 1,
    color: Colores.rojo
}

function area(r:Rectangulo){
    return r.alto * r.ancho
}

const areaRec = area(rec)
console.log(areaRec)

rec.toString = function () {
    return this.color ? `rectnagulo ${this.color}`: "un rectangulo"
}

console.log(rec.toString())

