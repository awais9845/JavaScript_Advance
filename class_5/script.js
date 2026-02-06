// // class 5 advance_JavaScript 
// // task 


// let people = [
//     {
//         id: 1,
//         name: "Awais",
//         fatherName: "Khan",
//         address: "Peshawar"
//     },
//     {
//         id: 2,
//         name: "Ali",
//         fatherName: "Ahmed",
//         address: "Wouch Nehar"
//     },
//     {
//         id: 3,
//         name: "Usman",
//         address: "Lahore",
//         fatherName: "Sartaj khan"
//     },
//     {
//         id: 4,
//         name: "Bilal",
//         fatherName: "Jehangir khan",
//         address: "Islamabad"
//     },
//     {
//         id: 5,
//         name: "Waqas khan",
//         fatherName: "Rahim",
//         address: "Islamabad"
//     }
// ];
// let box = document.createElement("div");
//    box.setAttribute("class", "box");
// let body = document.body;

// for (let product of people){
//     let card = document.createElement("div");
//     let idCard = document.createElement("p");
//     let para1 = document.createElement("p");
//     let para2 = document.createElement("p");
//     let para3 = document.createElement("p");


//     // card 
//     card.setAttribute("class", "card");

//     // id 
//     idCard.innerText = `ID ${product.id}`;
//     card.appendChild(idCard);

//     // name 
//     para1.innerText = product.name || "N/A";
//     card.appendChild(para1); 
    
//     // fathername 
//     para2.innerText = product.fatherName || "N/A";
//     card.appendChild(para2); 
//     // address 
//     para3.innerText = product.address || "N/A";
//     card.appendChild(para3); 

//     box.appendChild(card);


//     body.appendChild(box)
// }

// promise concecpt
let name = "awais khan";
let password = 1234;

let logIn = new Promise((resolve, reject)=>{
    if (name == "awais khan" && password == 1234){
        resolve("Log In succesfully");
    }else{
        reject("Error:");
    }
});

// logIn.then((item)=>{
//     console.log(item);
    
// }).catch((item)=>{
//     console.log(item);
    
// }).finally(()=>{
//     console.log("look at the message:");
    
// })


// second promise 
let num = 3;

// let checkNum = new Promise((resolve, reject)=>{
//     if (num % 2 == 0){
//         resolve("The number is Even");
//     }else{
//         reject("The number is Odd");
//     }
// });

// checkNum.then((item)=>{
//     console.log(item);
    
// }).catch((item)=>{
//     console.log(item);
    
// }).finally(()=>{
//     console.log("Look at the message!");
    
// });



// optional chaining
let users = [
  {
    id: 1,
    name: "Awais",
    city: "Peshawar",
    child: {
      name: "Ali",
    }
  },
  {
    id: 2,
    name: "Usman",
    // child: {
    //   name: "Ahmed",
    //   age: 7
    // }
  },
  {
    id: 3,
    // name: "Hamza",
    city: "Karachi",
    child: {
      age: 4
    }
  }
];
users.forEach((element)=>{
    console.log(element?.child?.age);
    
})

// nullish concept

// let username = undefined || null;
// let element = username ?? "empty";
// console.log(element);
// let username = 0; // 0 represent falls value
// let element = username || "empty";
// console.log(element); // empty
let username = 0; // mullish only skip the value when we pass the key words null or undefined
let element = username ?? "empty";
console.log(element); // empty
