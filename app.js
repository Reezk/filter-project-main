const data = [
    {
        id: 1,
        name: "shose",
        img: "img/dress2.jpg",
        price: 35,
        cat: "Dress",
    },
    {
        id: 2,
        name: "rlothes",
        img: "img/dress.jpg",
        price: 90,
        cat: "Dress",
    },
    {
        id: 3,
        name: "car",
        img: "img/Luxury2.jpg",
        price: 10,
        cat: "Luxury",
    },
    {
        id: 4,
        name: "football",
        img: "img/sport.jpg",
        price: 60,
        cat: "Sport",
    },
    {
        id: 5,
        name: "bext",
        img: "img/luxury.jpg",
        price: 70,
        cat: "Luxury",
    },
    {
        id: 6,
        name: "pext",
        img: "img/casual.jpg",
        price: 50,
        cat: "Casual",
    },
    {
        id: 7,
        name: "Motor",
        img: "img/casual.jpg",
        price: 30,
        cat: "Casual",
    },
]
let cats = document.querySelector('.cats');
let products = document.querySelector('.products');

function cates() {
    const allCat = data.map(item => item.cat);
    // console.log(allCat)
    const allCats = ['All', ...new Set(allCat)];

    cats.innerHTML = allCats.map(e => {
        return `<p class = "cat">${e}</p>`;

    }).join('');
    // console.log(allCats);
}
cates();

const showProd = () => {
    products.innerHTML = data.map(e => {
        return `<div class="product">
            <img class="immg" src="${e.img}" alt="">
            <span class="name">${e.name}</span>
            <span class="priceContent">$${e.price}</span>
        </div>`;
        // console.log(e)
    }).join('');

}
showProd();


let cat = document.querySelectorAll('.cat');
// console.log(cat);
cat.forEach(e => {
    e.addEventListener('click', (x) => {

        let felterCat = x.target.textContent;
        if (felterCat == 'All') {
            showProd();
        } else {
            let y = data.filter(e => {
                return e.cat == felterCat;
            });
            products.innerHTML = y.map(e => {
                return `<div class="product">
                    <img class="immg" src="${e.img}" alt="">
                    <span class="name">${e.name}</span>
                    <span class="priceContent">$${e.price}</span>
                </div>`;
                // console.log(e)
            }).join('');
        }
        // console.log(felterCat);
    });

});

let searchInput = document.querySelector('.search');

searchInput.addEventListener('keyup', () => {

    let lowerCasseInput = searchInput.value;


    let searchResult = data.filter(e => {

        return e.name.includes(lowerCasseInput);
    })
    if (searchResult.length == 0) {
        return products.innerHTML = `<div class="product">
                                        <h2>Not Result</h2>
                                    </div>`;
    } else {
        products.innerHTML = searchResult.map(e => {
            return `<div class="product">
                        <img class="immg" src="${e.img}" alt="">
                        <span class="name">${e.name.charAt(0).toUpperCase() + e.name.slice(1)}</span>
                        <span class="priceContent">$${e.price}</span>
                    </div>`;
        }).join('');
    }
});

let rangeInput = document.querySelector('.priceRange');


rangeInput.addEventListener('input', () => {
    
    
    let rangeValue = rangeInput.value;
    let contantPrice = document.querySelector('.priceValue').textContent = rangeValue;


    let rangePrice = data.filter(e => {
        return e.price <= rangeValue;
    });
    products.innerHTML = rangePrice.map(e => {
        return `<div class="product">
                    <img class="immg" src="${e.img}" alt="">
                    <span class="name">${e.name}</span>
                    <span class="priceContent">$${e.price}</span>
                </div>`;
    }).join('');

    console.log();


})

