 const miMap = new Map();
/*const obj  = {
    nombre : 'Ivan',
    'job': 'Programer'
}*/
/*const miFuncion = () => {},
    miString = "Ivan",
    miObjeto = {},
    miNumber = 10
miMap.set(miNumber, 'hola');
miMap.set(miString, 1);
miMap.set(miObjeto, 2);
miMap.set(miFuncion,3);*/

/*console.log(miMap);
console.log(obj);*/
/*
const persona = function (_name, _age) {
    this.name = _name;
    this.age = _age;
}

const nombre = new persona('Ivan', 'programador');
 console.log(nombre);
 nombre.name = 'Adrian';

const mapaSaldos = new Map();
mapaSaldos.set(nombre, 0);
console.log(mapaSaldos);
nombre.name = 'Ivan';

const Persona2 = new persona('Sergio', 23);
console.log(mapaSaldos.get(Persona2));*/

const nuevoMapa = new Map();

const Persona1 = {
    name: 'Ivan'
};

const Persona2 = {
    name: 'Ivan'
};

nuevoMapa.set(Persona2, 10);
nuevoMapa.set(Persona1, 0);

console.log(nuevoMapa.get(Persona2));
console.log(nuevoMapa.has(Persona2));

nuevoMapa.forEach((value, index, map) => {
    console.log(`${index} => ${value}` )
    console.log(map)
})