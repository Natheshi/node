const miArray = function (...values) {
    let value = values;
    this.valueOf = () => value;

    this.slice = (a, b) => {
        let tempArray = new miArray();
        for (let i = a; i < b; i++) {
            tempArray.push(value[i]);
        }

        return tempArray.valueOf();
    };

    this.length = () => {
        let index;
        for(index in value);
        return parseInt(index) + 1;
    };

    this.pop = () => {
        value = this.slice(0,this.length() - 1);

        return this.length();
    };

    this.shift = () => {
        value = this.slice(1,this.length());

        return this.length();
    };

    this.push = (...args) => {
        value = [...value, ...args];

        return this.length();
    };

    this.unshift = (...args) => {
        value = [...args, ...value ];

        return this.length();
    };

    this.forEach = fn => {
        for(let i = 0; i < this.length(); i++) {
            fn(value[i], i, value);
        }
    };

    this.find = enc => {
console.log(value);
        for (let el of value){
            let resul = enc(el);
            if (resul == true){
                return el;
            }


        }

            };
    this.map = enc => {
        let respuesta = [];

        for (let el of value) {

            respuesta.push(enc(el));


        }

        return respuesta;
    }
    this.findIndex = enc => {

        for (let el of value) {
            let resul = enc(el);
            if (resul == true) {


                return value.indexOf(el);
            }
        }
    }
    this.filter = enc => {

        let resul = [];
        for (let el of value) {;
            if (enc(el)) {

                resul.push(el);
            }
        }

        return resul;
    }

    this.reduce = enc => {

        let resul = 0;
        for (let el of value){
         resul = enc(resul, el);

        }

        return resul;
    }

    this.sort = fn => {
        for (let item in value){
            if (value[item] < value[item + 1]) {
                

            }

        }

    }

    //.splice, .concat, .join, .reverse, (.sort)?
}

const arr = new miArray(1,5,0);
arr.forEach( (value, index, array) => {
    console.log('ForEach -> ', value, index, array);
});

console.log(arr.valueOf());
console.log(arr.push(2,3,4));
console.log(arr.valueOf());

console.log(arr.slice(1,2));
console.log(arr.pop());
console.log(arr.shift());
console.log(arr.valueOf());
console.log(arr.find( x => x >1 && x < 3));
console.log(arr.map( x => x * 4 ));
console.log(arr.findIndex( x => x  == 3));
console.log(arr.filter(x => x > 3));
console.log(arr.reduce((a,b,c,d) => a + (b + 2)));