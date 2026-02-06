// task 1

const user = { 
name: "Alex", 
address: { 
city: "Berlin" 
} 
}; 
console.log("task 1")
console.log("name: ", user.name);
console.log("city: " ,user.address.city);

if (user?.phone){
    console.log(user?.phone);
}else{
    console.log("Not Provided");
}

// task 2
let isLogedin = false;
console.log("task 2")
let checkingLogin =isLogedin? "logedIn succesfully": "Not logedin";
console.log(checkingLogin)
let isadmin = true;
if (isLogedin === true){
    isLogedin = "welcome Admin";
}else{
    isLogedin = "welcome user";
}
console.log(isadmin)
// task 3
const product = { 
name: "Notebook", 
price: 0 
}; 
console.log("task 3")
console.log(product.price ?? "price is not present");

// task 5
let money = true;

let chechthemessage = new Promise((resolve, reject)=>{
    if(money == true){
        resolve("Coffee bought:");
    }else{
        reject("NOt enough money");
    }
});
console.log("task 5")
chechthemessage.then((item)=>{
    console.log(item);
});chechthemessage.catch((item)=>{
    console.log(item)
});chechthemessage.finally(()=>{
    console.log("Check the message;")
})