let cart = [];


function addCart(product, price) {

    cart.push({
        name: product,
        price: price
    });


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
                ${cart[i].name} - $${cart[i].price}
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