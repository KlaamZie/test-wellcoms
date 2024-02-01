"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTopStocks(stocks, prices) {
    return stocks.map((stock, index) => {
        const stockAvg = prices.reduce((acc, curr) => {
            return acc + curr[index];
        }, 0) / prices.length;
        return {
            stockName: stock,
            avg: stockAvg
        };
    }).sort((a, b) => b.avg - a.avg)
        .slice(0, 3).map((stock) => stock.stockName);
}
exports.default = getTopStocks;
const stocks = ['AMZN', 'CACC', 'EQIX', 'GOOG', 'ORLY', 'ULTA'];
const prices = [[12.81, 11.09, 12.11, 10.93, 9.83, 8.14], [10.34, 10.56, 10.14, 12.17, 13.1, 11.22], [11.53, 10.67, 10.42, 11.88, 11.77, 10.21]];
console.log(getTopStocks(stocks, prices));
