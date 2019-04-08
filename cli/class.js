class Animal {
  constructor(nombre, patas, color) {
    this.nombre = nombre;
    this.patas = patas;
    this.color = color;
  };
  informacion() {
    return `Este animal se llama ${this.nombre} tiene ${this.patas} patas, es de color ${this.color}`
  }
  cambiarEstado(estado){
    this.estado = estado;
  }
}

class Perro extends Animal{

  constructor(nombre,patas,color){
    super(nombre,patas,color)
  }
  informacion(){
    return `Este animal se llama ${this.nombre} tiene ${this.patas} patas, es de color ${this.color} y es un perro`
  }

  ladrar(){
    return 'GUAU'
  }
}

let ufo = new Animal('juan',3,'marron')
console.log(ufo)
console.log(ufo.informacion())
let pupi = new Perro('pupi',3,'marron')
console.log(pupi)
console.log(pupi.informacion())
console.log(pupi.ladrar())