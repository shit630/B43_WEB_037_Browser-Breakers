let slideImg = document.querySelector(".slider_Img");
let translate = 0;
setInterval(() => {
    if(translate >= 0 && translate < 300){
        translate += 100;
    }
    else{
        translate = 0
    }
    slideImg.style.transition = "1s"
    slideImg.style.transform = `translateX(${-translate}%)`
}, 3000);

let rightBtn = document.querySelector(".rightBtn").addEventListener("click", changeImgByRight)

let leftBtn = document.querySelector(".leftBtn").addEventListener("click", changeImgByLeft)

function changeImgByRight(){
    if(translate < 300){
        translate += 100;
        slideImg.style.transition = "1s"
        slideImg.style.transform = `translateX(${-translate}%)` 
    }
}

function changeImgByLeft(){
    if(translate > 0){
        translate -= 100;
        slideImg.style.transition = "1s"
        slideImg.style.transform = `translateX(${-translate}%)` 
    }
}

//electronic Fetch
fetch(`https://flipkart-clone-a0d6e-default-rtdb.firebaseio.com/BestOfElectronics.json`)
.then((res) => res.json())
.then((data) => displayBestElectronics(data))
.catch((err) => console.log(err));

function displayBestElectronics(products) {
    // console.log(products[0].price);
    let productCard = document.querySelector(".productCard");
    products.forEach((elm) => {
        let childProductCard = document.createElement("div");
        childProductCard.setAttribute("class", "childProductCard");
        childProductCard.innerHTML += `
            <img src="${elm.img}" alt="projecters">
            <p>${elm.title}</p>
            <p>From ₹${elm.price}</p>
        `;
        productCard.append(childProductCard);
    });
}

//beuty food toys fetch
fetch(`https://flipkart-clone-a0d6e-default-rtdb.firebaseio.com/BeautyFoodsToys.json`)
.then((res) => res.json())
.then((data) => displayBeautyFoodToys(data))
.catch((err) => console.log(err));

function displayBeautyFoodToys(data){
    let parentProductsCard = document.querySelector(".parentProductsCard");
    data.forEach((elm) => {
        let childProductsCard = document.createElement("div");
        childProductsCard.setAttribute("class", "childProductsCard");
        childProductsCard.innerHTML += `
            <img src="${elm.img}" alt="${elm.title}">
                <p>${elm.title}</p>
                <p>Up To ${elm.price}% Off</p>
        `;
        parentProductsCard.append(childProductsCard);
    });
}

//GromingBookCard
fetch(`https://flipkart-clone-a0d6e-default-rtdb.firebaseio.com/gromingBooks.json`)
.then((res) => res.json())
.then((data) => displayGromingBook(data))
.catch((err) => console.log(err));

function displayGromingBook(data){
    let parentGromingBookCard = document.querySelector(".parentGromingBookCard");
    data.forEach((elm) => {
        let childGromingBookCard = document.createElement("div");
        childGromingBookCard.setAttribute("class", "childGromingBookCard");
        childGromingBookCard.innerHTML += `
            <img src="${elm.img}" alt="${elm.title}">
                <p>${elm.title}</p>
                <p>Up To ${elm.price}% Off</p>
        `;
        parentGromingBookCard.append(childGromingBookCard);
    });
}


//Furniture Deals
fetch(`https://flipkart-clone-a0d6e-default-rtdb.firebaseio.com/furnitureDeals.json`)
.then((res) => res.json())
.then((data) => displayfurnitureDeals(data))
.catch((err) => console.log(err));

function displayfurnitureDeals(data){
    let parentfurnitureDealsCard = document.querySelector(".parentfurnitureDealsCard");
    data.forEach((elm) => {
        let childfurnitureDealsCard = document.createElement("div");
        childfurnitureDealsCard.setAttribute("class", "childfurnitureDealsCard");
        childfurnitureDealsCard.innerHTML += `
            <img src="${elm.img}" alt="${elm.title}">
                <p>${elm.title}</p>
                <p>From ₹${elm.price}</p>
        `;
        parentfurnitureDealsCard.append(childfurnitureDealsCard);
    });
}

