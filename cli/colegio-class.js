class Persona {
  constructor(nombre, fechaNac) {
    this.nombre = nombre;
    this.fechaNac = fechaNac;
  };
  presentacion() {
    return `Hola mi nombre es ${this.nombre} y naci el ${this.fechaNac}`;
  };
};

class Alumno extends Persona {
  constructor(nombre, fechaNac, asignatura, grado, turno) {
    super(nombre, fechaNac);
    this.asignatura = asignatura;
    this.grado = grado;
    this.turno = turno;
    this.nota = {};
  };
  calificacionPorMateria(asignatura, nota) {
    this.nota[asignatura] = nota;
  };
};

class Profesor extends Persona {
  constructor(nombre, fechaNac, asignatura) {
    super(nombre, fechaNac);
    this.asignatura = asignatura;
  };
  presentacion() {
    let texto = super.presentacion()+` y soy profesor de ${this.asignatura}`;
    return texto;
  };
};

class Asignatura {
  constructor(materia) {
    this.materia = materia;
  };
};

let alumnoInstancia = new Alumno('Juan', '12/01/2005');
let profesorInstancia = new Profesor('Jose', '15/06/1987', 'Fisica');

console.log(alumnoInstancia.presentacion());
console.log(profesorInstancia.presentacion());