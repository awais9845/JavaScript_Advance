let getproducts = async()=>{
    let products = await fetch("https://fakestoreapi.com/products");
        newprodcuts =await products.json();
    console.log(newprodcuts);
}
// getproducts();



// let getproducts = async ()=>{
//     try {
//         let products = await fetch ("https://fakestoreapi.com/product");
//         let newprodcuts = await products.json();
//         console.log(newprodcuts);
//     } catch (error) {
//         console.log(error)
//     }
// }
getproducts();
console.log("what is your name ");