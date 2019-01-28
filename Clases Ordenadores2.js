class Computador {
    constructor ({placaBase,procesador,puertos,RAM, alimentacion}) {
        this.placaBase = placaBase;
        this.procesador = procesador;
        this.puertos = puertos;
        this.RAM = RAM;
        this.alimentacion = alimentacion;

        this.componentes = {placaBase,procesador,RAM, alimentacion}

        this.status = false;
    }

    apagar () {
        this.status = false;
    }

    encender () {
        for(let comp in this.componentes) {
            this.componentes[comp] && this.componentes[comp].encender();
        }
        this.status = true;
    }
}

class Ordenador extends Computador {
    constructor({placaBase, procesador, puertos, RAM, alimentacion, perifericos = [] }) {
        super({placaBase, procesador, puertos, RAM, alimentacion});
        // console.log(RAM)
        this.perifericos = perifericos;
    }
}

class Componente {
    constructor({V, name, brand}) {
        this.V = V;
        this.name = name;
        this.brand = brand;

        this.status = false;
    }

    apagar () {
        this.status = false;
    }

    encender () {
        this.status = true;
    }
}

class RAM extends  Componente {
    constructor({V, name, brand, capacidad}) {
        super({V, name, brand})

        this.capacidad = capacidad;
    }
}

class CPU extends  Componente {
    constructor({V, name, brand, cores}) {
        super({V, name, brand})

        this.cores = cores;
    }
}

const miPc = new Ordenador({
    RAM: new RAM({
        V: 3,
        name: 'Modelo x',
        brand: 'Marca y',
        capacidad: 1024
    }),
    procesador: new CPU({
        V: 4.1,
        name: 'Modelo CPU x',
        brand: 'Marca CPU y',
        cores: 8
    }),
    puertos: { USB: 2}
});

console.log(miPc.componentes);
miPc.encender()
console.log( ' - - - -- -- - - -')
console.log(miPc.componentes)

console.log(miPc)