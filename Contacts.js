//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    //console.log(name, prop);
    for (let item in contacts){
        //console.log(contacts[item].firstName);
        if (name == contacts[item].firstName){
            if (prop == contacts[item]){
                console.log(contacts[item].likes);
                return contacts[item].likes;
            }
            else return 'No such property';
        }
        else {
            return 'No such contact';
        }
    }
    //console.log(contacts[0].firstName);
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Pepa", "Violin"));
console.log(lookUpProfile("Kristian", "lastName"));
