import {describe, expect, test} from '@jest/globals';
import filterDuplicates from "../filterDuplicates";

describe('testing for filterDuplicates function', () => {
    test('it shoulg return the good value', () => {
        expect(filterDuplicates([7, 3, 6, 4, 3, 3, 4, 9])).toEqual([7, 3, 6, 4, 9])
    })

    test("it should not return the good value", () => {
        expect(filterDuplicates([7, 3, 6, 4, 3, 3, 4, 1])).not.toEqual([7, 3, 6, 4, 9])
    })
});