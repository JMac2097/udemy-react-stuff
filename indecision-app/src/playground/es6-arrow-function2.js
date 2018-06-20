// arguments object -- no longer bound

// const add = (a,b) => {
//     console.log(arguments);   // Does not work
//     return a + b;
// };

// console.log(add(55, 1));


// 'this' keyword -- no longer bound

// const user = {
//     name: 'Derek',
//     cities: ['NY', 'Dublin', 'Philedelphia'],
//     printPlacesLived() {
    
//         return this.cities.map((city) => `${this.name} has lived in ${city}`);    
//     }
// };

// console.log(user.printPlacesLived());


// challenge

const multiplier = {
    //numbers array 
    numberArray : [1, 2, 3, 4, 5],
    // multiply by -- single number
    multiplyBy: 2,
    // multiply -- return a new array where the numbers have been multiplied -- map
    multiply() {

        return this.numberArray.map((multNumber) => this.multiplyBy * multNumber);
    }
};









console.log(multiplier.multiply())