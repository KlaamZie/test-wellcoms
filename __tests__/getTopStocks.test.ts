import {describe, expect, test} from "@jest/globals";
import getTopStocks from "../getTopStocks";

describe('testing for getTopStocks function', () => {
    const stocks = ['AMZN', 'CACC', 'EQIX', 'GOOG', 'ORLY', 'ULTA']
    const prices = [[12.81, 11.09, 12.11, 10.93, 9.83, 8.14], [10.34, 10.56, 10.14,
        12.17, 13.1, 11.22], [11.53, 10.67, 10.42, 11.88, 11.77, 10.21]]

    test('it should return the good value', () => {
        expect(getTopStocks(stocks, prices)).toEqual(['GOOG', 'ORLY', 'AMZN'])
    })

    test('it should not return the good value', () => {
        expect(getTopStocks(stocks, prices)).not.toEqual(['GOOG', 'ORLY', 'ULTA'])
    })
})
