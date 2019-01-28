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

    // .find, .findIndex, .splice, .map, .filter
    // .reduce, .concat, .join, .reverse, (.sort)?
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