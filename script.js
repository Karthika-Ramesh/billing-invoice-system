let subtotal = 0;

document.getElementById("date").innerText = new Date().toLocaleDateString();
document.getElementById("invoiceNo").innerText = "Invoice #" + Math.floor(Math.random()*10000);

function addItem() {
    let item = document.getElementById("itemName").value;
    let price = parseFloat(document.getElementById("price").value);
    let qty = parseInt(document.getElementById("quantity").value);

    if (!item || !price || !qty) {
        alert("Fill all fields!");
        return;
    }

    let totalItem = price * qty;
    subtotal += totalItem;

    let table = document.getElementById("billTable");
    let row = table.insertRow();

    row.insertCell(0).innerHTML = item;
    row.insertCell(1).innerHTML = price;
    row.insertCell(2).innerHTML = qty;
    row.insertCell(3).innerHTML = totalItem;

    updateTotals();

    document.getElementById("itemName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
}

function updateTotals() {
    let gst = subtotal * 0.18;
    let total = subtotal + gst;

    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("gst").innerText = gst.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}

function generateInvoice() {
    let name = document.getElementById("customerName").value;

    document.getElementById("invoice").innerHTML = `
        <h3>Invoice</h3>
        <p>Customer: ${name}</p>
        <p>${document.getElementById("invoiceNo").innerText}</p>
        <p>Total Paid: ₹ ${document.getElementById("total").innerText}</p>
        <p style="color:lightgreen;">✔ Payment Successful</p>
    `;
}

function printInvoice() {
    window.print();
}