// // let products = async()=>{
// //     let response = await fetch(" https://api.escuelajs.co/api/v1/products");
// //     let data= await response.json();
// //     console.log(data);
// // }
// // products();


// let products = async ()=>{
//     try {
//         let response = await fetch(" https://api.escuelajs.co/api/v1/products");
//         let data =await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }

// }
// products();



let getProducts = async() =>{
let newproducts = await fetch("https://fake-store-api.mock.beeceptor.com/api/produc");
let data =await newproducts.json();
console.log(data);
}

// getProducts();

// let getProducts = async()=>{
//     try {
//         let newproducts = await fetch("https://fake-store-api.mock.beeceptor.com/api/produc");
// let data =await newproducts.json();
// console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }

getProducts();



console.log("awaiskhan");