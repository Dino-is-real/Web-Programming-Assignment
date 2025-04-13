function calculateTotal() {
    let adultCount = parseInt(document.getElementById("adultTickets").value) || 0;
    let childCount = parseInt(document.getElementById("childTickets").value) || 0;

    let total = (adultCount * 100) + (childCount * 50);
    document.getElementById("totalAmount").innerText = total;
}
