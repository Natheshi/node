// Portail y sobremesa  como tipos de ordenador
// tenemos direferentes componentes
// Cada ordenador puede tener componentes
// tienen metodos propios y propiedades de cada uno.

class Ordenador {
    constructor(portatil, sobremesa) {
        this.portatil =  "ultrabook";
        this.sobremesa = "todoEnUno";
    }
}

class Componente extends Ordenador {
    constructor(portatil, sobremesa, fabricante){
        super(portatil, sobremesa);
        this.fabricante = "Intel";}


}

var Dell = new Componente();
var Asus = new Ordenador();

console.log(Asus.portatil);
consoloe.log(Dell.fabricante);
// expected output: "Polygon"