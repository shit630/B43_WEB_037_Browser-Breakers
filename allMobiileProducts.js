let allProd;
let originalData = [];
let currPage = 1;
let limt = 5;

fetch(`https://flipkart-clone-a0d6e-default-rtdb.firebaseio.com/mobiles.json`)
.then((res) => res.json())
.then((data) => {
    allProd = Object.entries(data);
    originalData = Object.entries(data);
    dispalyProducts(allProd)
    sePagination();
})
.catch((err) => console.log(err));

function dispalyProducts(data){
    let start = (currPage-1)*limt;
    let end = start+limt;
    let paginatedData = data.slice(start, end)
    console.log(data);
    // console.log(allProd);
    let productsListing = document.querySelector(".productsListing");
    productsListing.innerHTML =  "";
    paginatedData.forEach((elm) => {
        let pId = elm[0];
        console.log(pId);
        // console.log(elm[1]);
        // console.log(elm);
       let singleProductsListing = document.createElement("div");
       singleProductsListing.setAttribute("class", "singleProductsListing");
       singleProductsListing.setAttribute(`onclick`, `showProductDeteils('${pId}')`)
       singleProductsListing.innerHTML += 
       `
            
                <div class="descriptionDiv">
                    <div class="imgDiv">
                        <img src="${elm[1].img}" alt="${elm[1].descrp.title}">
                    </div>
                    <div class="titleDiv">
                        <h3>${elm[1].descrp.title}</h3>
                        <div class="reviews">
                            <span>${elm[1].descrp.rating.rate}☆</span>
                            <span>${elm[1].descrp.rating.peopleRating} Ratings & ${elm[1].descrp.rating.peopleReview} Reviews</span>
                        </div>
                        <div class="productsInfo">
                            <ul>
                                <li>${elm[1].descrp.features.ram} GB RAM | ${elm[1].descrp.features.rom}GB ROM | Expandable Upto ${elm[1].descrp.features.expantable} TB</li>
                                <li>${elm[1].descrp.features.screen}</li>
                                <li>${elm[1].descrp.features.camera}</li>
                                <li>${elm[1].descrp.features.Battery}</li>
                                <li>${elm[1].descrp.features.processor}</li>
                                <li>${elm[1].descrp.features.warranty}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="priceOthers">
                    <div class="priceDiv">
                        <div class="priceLogo">
                            <h2>₹${elm[1].priceSection.price}</h2>
                            <img src="${elm[1].priceSection.logo}" alt="assures">
                        </div>
                        <div class="originalPrice">
                            <span>₹${elm[1].priceSection.originalPrice}</span>
                            <span>${elm[1].priceSection.off}% off</span>
                        </div>
                        <div class="othersInfo">
                            <p>Free delivery</p>
                            <p>Save extra with combo offers</p>
                            <p>Upto <span>₹${elm[1].priceSection.exchange}</span> Off on Exchange</p>
                        </div>
                    </div>
                </div> 
       ` ;
       productsListing.append(singleProductsListing);
    });
}


//search product
let searchedProduct;
let searching = document.getElementById("searching");
searching.addEventListener("input", searchByProdTitle);

function searchByProdTitle(){
    let keyword = document.getElementById("searching").value.toLowerCase();
    console.log(keyword);
    searchedProduct = allProd.filter((elm) => {
        return elm[1].descrp.title.toLowerCase().includes(keyword);
    });
    console.log(searchedProduct);
    dispalyProducts(searchedProduct);
}

//sortByprice
let price = document.querySelector("#price");
price.addEventListener("change", sortByPrice);

function sortByPrice(){
    let priceValue = document.querySelector("#price").value;
    console.log(priceValue);
    if(priceValue == "lth"){
        allProd.sort((a, b) => a[1].priceSection.price-b[1].priceSection.price);
    }
    else if(priceValue == "htl"){
        allProd.sort((a, b) => b[1].priceSection.price-a[1].priceSection.price);
    }
    else{
        dispalyProducts(originalData);
        return;
    }
    dispalyProducts(allProd);
}


//move products detelis page
function showProductDeteils(pId){
    console.log(pId);
    window.location.href = `productsdetelis.html?pId=${pId}`
}


//pagination
function sePagination(){
    let pageCount = Math.ceil(originalData.length/limt);
    let pagination = document.querySelector(".pagination");
    pagination.innerHTML = ""
    for(let i=1; i<=pageCount; i++){
        let liPage = document.createElement("li");
        liPage.innerHTML += i;
        liPage.addEventListener("click", () => {
            liPage.style.backgroundColor = "red";
            currPage = i;
            dispalyProducts(originalData);
        });
        pagination.append(liPage);
        liPage.style.backgroundColor = "blue";
    }
}