import {describe, expect, test} from '@jest/globals';
import findSumPair from "../findSumPair";

describe('testing for findSumPair function', () => {
    test('it should return the good value', () => {
        expect(findSumPair([1, 5, 8, 1, 2], 13)).toEqual([1, 2])
    })

    test("it should not return the good value", () => {
        expect(findSumPair([1, 5, 8, 1, 2], 13)).not.toEqual([1, 3])
    })
});