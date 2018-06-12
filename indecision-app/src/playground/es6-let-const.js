var nameVar = 'Derek';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('NameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);


// Block Scoping

var fullName = 'Derek ZeroFace';

if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);