interface StockWithAverageType {
    stockName: string,
    avg: number
}

export default function getTopStocks(stocks: string[], prices: number[][]): string[] {
    return stocks.map((stock: string, index: number): { stockName: string, avg: number } => {
        const stockAvg: number = prices.reduce((acc, curr) => {
            return acc + curr[index]
        }, 0) / prices.length

        return {
            stockName: stock,
            avg: stockAvg
        }
    }).sort((a: StockWithAverageType, b: StockWithAverageType) => b.avg - a.avg)
        .slice(0, 3).map((stock: StockWithAverageType) => stock.stockName)
}

const stocks: string[] = ['AMZN', 'CACC', 'EQIX', 'GOOG', 'ORLY', 'ULTA']
const prices: number[][] = [[12.81, 11.09, 12.11, 10.93, 9.83, 8.14], [10.34, 10.56, 10.14, 12.17, 13.1, 11.22], [11.53, 10.67, 10.42, 11.88, 11.77, 10.21]]

console.log(getTopStocks(stocks, prices))