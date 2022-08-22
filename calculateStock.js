const totalPaymentSpan = document.getElementById("total_payment_value");
const stockCountSpan = document.getElementById("total_stocks_count");
const averageStockPriceSpan = document.getElementById("average_stock_price");

document.getElementById("calcBtn").addEventListener("click", (e) => {
    const stockElements = document.querySelectorAll("#stock_calculator_container > .stock_piece");
    let countsToPriceCouple = [];
    stockElements.forEach((stockInputs) => fillTheMap(countsToPriceCouple, stockInputs));

    let { totalPayment, totalStocks, averagePrice } = calculate(countsToPriceCouple);

    totalPaymentSpan.innerText = totalPayment;
    stockCountSpan.innerText = totalStocks;
    averageStockPriceSpan.innerText = averagePrice;
})

function fillTheMap(coupleArr, inputCouple) {
    const childs = inputCouple.children;
    coupleArr.push([childs[1].value, childs[3].value]);
}

function calculate(arr) {
    let result = {
        totalPayment: 0,
        totalStocks: 0,
        averagePrice: 0
    };

    arr.forEach((couple) => {
        if (couple[0] == "" || parseInt(couple[0]) == 0) return;
        let price = couple[1];
        if (price == "" || parseInt(price) == 0) return;
        result.totalStocks += parseInt(couple[0]);
        result.totalPayment += couple[0] * price;
        result.averagePrice = Math.round((result.totalPayment / result.totalStocks) * 100) / 100;
    })

    return result;
}
