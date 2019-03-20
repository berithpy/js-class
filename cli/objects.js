// breve introduccion a objectos.
let nombre = 'guitarra';
let cuerdas = 6;
let notas = ['mi','la','re','sol','si','mi'];

let nombreDos= 'bajo';
let cuerdasDos = 4;
let notasDos = ['mi','la','re','sol'];

console.log(`nombre variable ${nombre}`)
console.log(`nombre variable ${nombreDos}`)

let instrumentos = [{
    nombre:"guitarra",
    cuerdas:6,
    notas:['mi','la','re','sol','si','mi'],
    datos:()=>{ 
        console.log(nombre)
        console.log(cuerdas)
        console.log(notas)
    }
},{
    nombre:"bajo",
    cuerdas:4,
    notas:['mi','la','re','sol'],
}]
console.log(`nombre objeto ${instrumentos[1].nombre}`)

// instrumentos[0].datos()


