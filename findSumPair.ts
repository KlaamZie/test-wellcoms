type GetFinalValueType = number[] | ((arr: number[][], index: number) => GetFinalValueType)

function compareArrays(a: number[], b: number[]): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}

function allSameElementsInArray(arr: number[][]): boolean {
    let ref: number[] = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (!compareArrays(ref, arr[i])) return false
    }

    return true
}

function getMinValueIn2dArray(arr: number[][], index: number): number[][] {
    let minValues: number[][] = [arr[0]]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][index] < minValues[0][index]) minValues = [arr[i]]
        if (compareArrays(arr[i], minValues[0])) minValues.push(arr[i])
    }

    return minValues
}

function getFinalValue(arr: number[][], index: number): GetFinalValueType {
    if (arr.length > 1) {
        let minValues = getMinValueIn2dArray(arr, index)

        if (minValues.length === 1) {
            return arr[0]
        }

        if (allSameElementsInArray(minValues)) {
            return arr[0]
        }

        return getFinalValue(minValues, index + 1)
    }

    return arr[0]
}

export default function findSumPair(numbers: number[], k: number): number[] {
    if (k <= 0) throw new RangeError("k doit etre un entier positif > 0")

    let sumPairs: number[][] = [];

    for (let i: number = 0; i < numbers.length; i++) {
        for (let n: number = 0; n < numbers.length; n++) {
            if (i !== n) {
                const sum: number = numbers[i] + numbers[n]
                if (sum === k) sumPairs.push([numbers.indexOf(numbers[i]), numbers.indexOf(numbers[n])])
            }
        }
    }

    if (!sumPairs.length) return [0, 0]

    if (sumPairs.length === 1) return sumPairs[0]

    if (sumPairs.length > 1) {
        sumPairs.forEach((sum: number[]) => sum.sort())

        return getFinalValue(sumPairs, 0) as number[]
    }

    return [0, 0]
}

const numbers: number[] = [1, 5, 8, 1, 2];
const k: number = 13;

console.log(findSumPair(numbers, k));