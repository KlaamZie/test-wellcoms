"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compareArrays(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
function allSameElementsInArray(arr) {
    let ref = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (!compareArrays(ref, arr[i]))
            return false;
    }
    return true;
}
function getMinValueIn2dArray(arr, index) {
    let minValues = [arr[0]];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][index] < minValues[0][index])
            minValues = [arr[i]];
        if (compareArrays(arr[i], minValues[0]))
            minValues.push(arr[i]);
    }
    return minValues;
}
function getFinalValue(arr, index) {
    if (arr.length > 1) {
        let minValues = getMinValueIn2dArray(arr, index);
        if (minValues.length === 1) {
            return arr[0];
        }
        if (allSameElementsInArray(minValues)) {
            return arr[0];
        }
        return getFinalValue(minValues, index + 1);
    }
    return arr[0];
}
function findSumPair(numbers, k) {
    if (k <= 0)
        throw new RangeError("k doit etre un entier positif > 0");
    let sumPairs = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let n = 0; n < numbers.length; n++) {
            if (i !== n) {
                const sum = numbers[i] + numbers[n];
                if (sum === k)
                    sumPairs.push([numbers.indexOf(numbers[i]), numbers.indexOf(numbers[n])]);
            }
        }
    }
    if (!sumPairs.length)
        return [0, 0];
    if (sumPairs.length === 1)
        return sumPairs[0];
    if (sumPairs.length > 1) {
        sumPairs.forEach((sum) => sum.sort());
        return getFinalValue(sumPairs, 0);
    }
    return [0, 0];
}
exports.default = findSumPair;
const numbers = [1, 5, 8, 1, 2];
const k = 13;
console.log(findSumPair(numbers, k));
