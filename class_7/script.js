let body = document.body;
let newApi = fetch("https://fakestoreapi.com/products")
newApi.then((item)=>{
    return item.json();
}).then((data)=>{
    data.forEach(data => {
        let card = document.createElement("div");
    card.innerHTML = `
    <p>${data.id}</p>
    <p>${data.price}</p>
    <p>${data.category}</p>
     <img ${data.image}>
    <button>Add to Cart</button>

    `;
    body.appendChild(card);
        let button = card.querySelector("button");

        button.addEventListener("click" ,()=>{
            let cart = JSON.parse(localStorage.getItem("cardData")) || [];
           cart.push(card);
            localStorage.setItem("cardData", JSON.stringify(cart));
            alert("Item added to cart!");

        })
    });

});

let btn = document.createElement("button");
btn.innerText ="Products";
body.appendChild(btn);

// btn.addEventListener("click", ()=>{
//     JSON.parse(localStorage.getItem("cardData")) || [];
// })
btn.addEventListener("click", ()=>{
    let cart = JSON.parse(localStorage.getItem("cardData")) || [];
    alert(`You have ${cart.length} items in the cart.`);
});

// let array = [];

// localStorage.clear();