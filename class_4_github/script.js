//enhance_object_literal 
// first practice question
// let {name, marks, grade} = {
//     name: "awais khan",
//     marks: 555,
//     grade: 7
// }
// console.log(name, marks, grade);

// practice 2
// function studentDetails(name, fatherName,Nationality){
//     userDetails={
//         name,
//         fatherName,
//         Nationality,
//         display(){
//             console.log(this.name);
            
//         }
    
//     }
//     return userDetails.display();
    
    
// }

// studentDetails("awais khan", "sartaj khan ", "pakistani")

// let name = "awais khan";
// let fname = "sartaj khan";
// let roll_no = 23;

// let studentDetails = {
//     name,
//     fname,
//     roll_no,
//     display(){
//         return this.name;
//     }
// }
// console.log(studentDetails.display());

let a = [1,2,3,4];
let c= [2,3,5,6,32,23];
let b = [...a, ...c];
// let b = [...a];
console.log(...b);
console.log(b);
// console.log(...b);

