document.getElementById("addNew").addEventListener("click", (e) => {
    let stockInputs = document.querySelectorAll("#stock_calculator_container > .stock_piece");
    let currentIndex = stockInputs.length + 1;

    const container = document.createElement("div");
    container.setAttribute("class", "stock_piece");

    const element = `
        <label for="stock_count_${currentIndex}">Stock count: </label>
        <input type="number" min="0" id="stock_count_${currentIndex}">
        <label for="stock_price_${currentIndex}">Stock price: </label>
        <input type="number" min="0" id="stock_price_${currentIndex}">
        <button id="remove_${currentIndex}">X</button>`;
    container.innerHTML = element;
    stockInputs[0].parentNode.appendChild(container);

    document.getElementById(`remove_${currentIndex}`).addEventListener("click", (e) => e.target.parentNode.remove());
});