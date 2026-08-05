let cart = [];


function addCart(product, price) {


    let existingProduct = cart.find(item => item.name === product);


    if (existingProduct) {

        existingProduct.quantity++;

    }

    else {

        cart.push({

            name: product,

            price: price,

            quantity: 1

        });

    }


    updateCart();

}



function updateCart() {

    let cartDisplay = document.getElementById("cartItems");

    let totalDisplay = document.getElementById("total");


    cartDisplay.innerHTML = "";


    let total = 0;


    for (let i = 0; i < cart.length; i++) {


        cartDisplay.innerHTML += `

    <p>

       ${cart[i].name}

<br>

Quantity: ${cart[i].quantity}

<br>

Price: $${cart[i].price * cart[i].quantity}

<br>

<button onclick="increaseQuantity(${i})">
    +
</button>


<button onclick="decreaseQuantity(${i})">
    -
</button>

        <button onclick="removeCart(${i})">
            Remove
        </button>

    </p>

    `;


        total += cart[i].price;

    }


    totalDisplay.innerHTML = total;


}






function searchProduct() {


    let input = document
        .getElementById("search")
        .value
        .toLowerCase();



    let products = document
        .getElementsByClassName("card");




    for (let i = 0; i < products.length; i++) {


        let name = products[i]
            .innerText
            .toLowerCase();



        if (name.includes(input)) {


            products[i].style.display = "block";


        }


        else {


            products[i].style.display = "none";


        }


    }



}







function showMessage() {


    alert("Thanks for contacting Tech Store!");


}

function toggleDarkMode() {

    document.body.classList.toggle("dark");

}

function removeCart(index) {

    cart.splice(index, 1);

    updateCart();

}

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}

function decreaseQuantity(index) {
    cart[index].quantity--;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}