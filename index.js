
function getMenu(){
    const homeMenu = document.getElementsByClassName("hero-section")[0];
    homeMenu.style.display ="none"
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('product-container');

        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('card-main');
            productDiv.innerHTML = `
                    <div class="card-body">
                        <img src="${product.imgSrc}" alt="${product.name}">
                        <div class="price-div">
                            <div>
                                <h4>${product.name}</h4>
                                <p>$ <span>${product.price}</span>/-</p>
                            </div>
                            <div id="add" class="img"><img src="./plus (1) 1.svg" alt="plus"></div>
                        </div>
                    </div>
            `;

            container.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

}
function homeMenu(){
    document.getElementById("home").style.display = "block";
}



function takeOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const burgers = [
                { name: "Burger 1", price: 5.99 },
                { name: "Burger 2", price: 6.99 },
                { name: "Burger 3", price: 7.99 }
            ];

            const order = {
                timestamp: new Date(),
                burgers: []
            };

            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * burgers.length);
                order.burgers.push(burgers[randomIndex]);
            }

            resolve(order);
        }, 2500);
    });
}

function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

async function thankyouFnc() {
    const thankyouPage = document.getElementById('thankyou-page');
    const menuPage = document.getElementById('menu-page');

    // Hide menu page and show thank you page
    menuPage.classList.add('hidden');
    thankyouPage.classList.remove('hidden');
}
