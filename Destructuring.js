// assigning object attributes to variables
const person = {
    empName: 'kuladeep',
    empAge: 21,
    gender: 'male'    
}

// destructuring assignment
let { empName, empAge, gender } = person;

console.log(empName); // kuladeep
console.log(empAge); // 21
console.log(gender); // male