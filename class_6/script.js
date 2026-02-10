// // task 1

// const user = { 
// name: "Alex", 
// address: { 
// city: "Berlin" 
// } 
// }; 
// console.log("task 1")
// console.log("name: ", user.name);
// console.log("city: " ,user.address.city);

// if (user?.phone){
//     console.log(user?.phone);
// }else{
//     console.log("Not Provided");
// }

// // task 2
// let isLogedin = false;
// console.log("task 2")
// let checkingLogin =isLogedin? "logedIn succesfully": "Not logedin";
// console.log(checkingLogin)
// let isadmin = true;
// if (isLogedin === true){
//     isLogedin = "welcome Admin";
// }else{
//     isLogedin = "welcome user";
// }
// console.log(isadmin)
// // task 3
// const product = { 
// name: "Notebook", 
// price: 0 
// }; 
// console.log("task 3")
// console.log(product.price ?? "price is not present");

// // task 5
// let money = true;

// let chechthemessage = new Promise((resolve, reject)=>{
//     if(money == true){
//         resolve("Coffee bought:");
//     }else{
//         reject("NOt enough money");
//     }
// });
// console.log("task 5")
// chechthemessage.then((item)=>{
//     console.log(item);
// });chechthemessage.catch((item)=>{
//     console.log(item)
// });chechthemessage.finally(()=>{
//     console.log("Check the message;")
// })


// Promise concept
// let age = 18;
// let loading = true;
// let checkCondition = new Promise((resolve,reject)=>{
//     if(age >= 18){
//         setTimeout(() => {
//             loading = false;
//             resolve("You are eligible for the applying to the test:");
//         }, 2000);
//     }else{
// setTimeout(() => {
//     loading = false;
//             reject("You are not eleigible for the applying to the test:");

// }, 2000);    }
// });

// console.log(loading && "loading...")
// checkCondition.then((message)=>{
//     console.log(message);
// }).catch((message)=>{
//     console.log(message);
// }).finally(()=>{
//     console.log("check the message: ");
// })

// const fetchAPI = fetch("https://jsonplaceholder.typicode.com/posts");
// fetchAPI.then((item)=>{
//     return item.json();
// }).then((data)=>{
//     // console.log(data);
//     let body = document.body;
    
//     data.forEach(element => {
//         let div = document.createElement("div");
    
//          div.innerHTML = `+


//                 <h3>${element.title}</h3>
                
//                 <p>${element.userId}</p>
//                 <p>${element.body}</p>
//                 <hr>
//             `;
//             body.appendChild(div);
//     });
// })




// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res) => res.json())
// .then((data) => {
//     let body = document.body;

//     data.forEach((post) => {
//         let div = document.createElement("div");

//         div.innerHTML = `
            
//         <p>${post.id}</p>
//             <h3>${post.title}</h3>
//             <p>${post.body}</p>
//             <hr>
//         `;

//         body.appendChild(div);
//     });
// });
