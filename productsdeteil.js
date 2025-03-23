let url = new URLSearchParams(window.location.search);
let pId = url.get("pId");
console.log(pId);

fetch(`https://flipkart-clone-a0d6e-default-rtdb.firebaseio.com/mobiles/${pId}.json`)
.then((res) => res.json())
.then((data) => disPlayProduct(Object.entries(data)))
.catch((err) => console.log(err));

function disPlayProduct(data){
    let mainDiv = document.querySelector(".mainDiv");
    console.log(data);
    for(let i=0; i<1; i++){
        mainDiv.innerHTML = `
            <div class="prodImgDiv">
            <div class="imageDiv">
                <img src="${data[1][1]}" alt="${data[0][1].title}">
            </div>
            <div class="buyCartBtnDiv">
                <div class="addcartDiv"> 
                    <button class="addToCart"><i class="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
                </div>
                <div class="buyBtnDiv">
                    <button class="buyNow" onclick="goToPaymentPage()"><i class="fa-solid fa-bolt"></i>BUY NOW</button>
                </div>
            </div>
        </div>
        <div class="descriptionDiv">
            <div class="prodTitle">
                <p>${data[0][1].title}</p>
            </div>
            <div class="reviews">
                <span class="rate">${data[0][1].rating.rate}☆</span>
                <span class="publicRating">${data[0][1].rating.peopleRating} Rating & ${data[0][1].rating.peopleReview} Reviews</span>
                <img src="${data[2][1].logo}" alt="logo">
            </div>
            <div class="extraOff">
                <p>Extra ₹${data[0][1].extraOff} off</p>
            </div>
            <div class="priceOffer">
                <span>₹${data[2][1].price}</span>
                <span>₹${data[2][1].originalPrice}</span>
                <span>${data[2][1].off}% off</span>
            </div>
            <div class="bankOffers">
                <p>Avaliable offers</p>
                <p><i class="fa-solid fa-tag"></i> <span style="font-weight: bold; margin-left: 0.4rem;">Bank Offer</span> ${data[0][1].bankOffer}% Unlimited Cashback on Flipkart Axis Bank Credit Card <span style="color: blue;">T&C</span></p>
                <p><i class="fa-solid fa-calendar-check"></i>EMI starting from ₹${data[0][1].emi}/month <span style="color: blue;">View Plans</span></p>
            </div>
            <div class="highlights">
                <p>Highlights</p>
                <ul class="productDescription">
                    <li>${data[0][1].features.ram} GB RAM | ${data[0][1].features.rom} GB ROM | Expandable Upto ${data[0][1].features.expantable} TB</li>
                    <li>${data[0][1].features.screen}</li>
                    <li>${data[0][1].features.camera}</li>
                    <li>${data[0][1].features.Battery}</li>
                    <li>${data[0][1].features.processor}</li>
                </ul>
            </div>
        </div>
        `;
    } 
}

function goToPaymentPage(){
    window.location.href = "paymentPage.html"
}