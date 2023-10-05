console.log("-------- Destructuring ---------");

// array
let items = ["Table", "Handphone", "Computer"];

// Manual variable Declaration
let item1 = items[0];
let item2 = items[1];
let item3 = items[2];

console.log(item1);
console.log(item2);
console.log(item3);

// Variable declaration with destructuring
let [item_1, item_2, item_3] = items

console.log(item_1);
console.log(item_2);
console.log(item_3);

// Object
let student = {
    name: "Zainal",
    age: 22,
    departement: "Information System"
}

// Manual variable declaration
let studentName = student.name;
let studentAge = student.age;
let studentDepartement = student.departement;

console.log(studentName);
console.log(studentAge);
console.log(studentDepartement);

// Variable declaration with destructuring
console.log("------- Variable declaration with destructuring -----------");
let {name, age, departement} = student;

console.log(name);
console.log(age);
console.log(departement);

// Destructuring by providing aliases
console.log("---------- Destructuring by providing aliases ----------");
let {name: objectName, age: objectAge, department: objectDepartment} = student;

console.log(objectName);
console.log(objectAge);
console.log(objectDepartment);

// Destructuring of a function's return value
const studentData = () => {
    return { name: "Rizky", age: 22, department: "Information System" }
}

let { 
    name: studentNameData, 
    age: studentAgeData, 
    department: studentDepartmentData
} = studentData();

console.log(studentNameData);  
console.log(studentAgeData); 
console.log(studentDepartmentData);