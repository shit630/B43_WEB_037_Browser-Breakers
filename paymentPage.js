document.addEventListener("DOMContentLoaded", () => {
    const paymentDetails = document.getElementById("payment-details");
    const paymentOptions = document.querySelectorAll('input[name="payment"]');

    function updatePaymentDetails() {
        let selectedMethod = document.querySelector('input[name="payment"]:checked').value;
        let html = "";

        if (selectedMethod === "upi") {
            html = `<input type="text" id="upiId" placeholder="Enter UPI ID">`;
        } else if (selectedMethod === "card") {
            html = `
                <input type="text" id="cardNumber" placeholder="Card Number" maxlength="16">
                <input type="text" id="cardHolder" placeholder="Card Holder Name">
                <input type="text" id="expiry" placeholder="Expiry (MM/YY)" maxlength="5">
                <input type="password" id="cvv" placeholder="CVV" maxlength="3">
            `;
        } else if (selectedMethod === "netbanking") {
            html = `
                <select id="bank">
                    <option value="">Select Bank</option>
                    <option value="SBI">State Bank of India</option>
                    <option value="HDFC">HDFC Bank</option>
                    <option value="ICICI">ICICI Bank</option>
                    <option value="Axis">Axis Bank</option>
                </select>
            `;
        } else if (selectedMethod === "cod") {
            html = `<p>No details required. Pay cash when your order arrives.</p>`;
        }

        paymentDetails.innerHTML = html;
    }

    paymentOptions.forEach(option => {
        option.addEventListener("change", updatePaymentDetails);
    });

    updatePaymentDetails(); // Set initial method

    document.getElementById("payNow").addEventListener("click", () => {
        let selectedMethod = document.querySelector('input[name="payment"]:checked').value;
        let isValid = true;
        let message = "";

        if (selectedMethod === "upi") {
            let upiId = document.getElementById("upiId").value.trim();
            if (!upiId) {
                isValid = false;
                message = "Please enter a valid UPI ID.";
            }
        } else if (selectedMethod === "card") {
            let cardNumber = document.getElementById("cardNumber").value.trim();
            let cardHolder = document.getElementById("cardHolder").value.trim();
            let expiry = document.getElementById("expiry").value.trim();
            let cvv = document.getElementById("cvv").value.trim();

            if (!cardNumber || cardNumber.length !== 16) {
                isValid = false;
                message = "Enter a valid 16-digit Card Number.";
            } else if (!cardHolder) {
                isValid = false;
                message = "Enter Card Holder Name.";
            } else if (!expiry || !expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
                isValid = false;
                message = "Enter a valid Expiry Date (MM/YY).";
            } else if (!cvv || cvv.length !== 3) {
                isValid = false;
                message = "Enter a valid 3-digit CVV.";
            }
        } else if (selectedMethod === "netbanking") {
            let bank = document.getElementById("bank").value;
            if (!bank) {
                isValid = false;
                message = "Select a bank.";
            }
        }

        if (isValid) {
            alert("Payment Successful! ✅");
            window.location.href = "index.html"
        } else {
            alert("⚠ " + message);
        }
    });
});
