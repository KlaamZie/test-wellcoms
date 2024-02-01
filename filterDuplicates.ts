export default function filterDuplicates(data: number[]): number[] {
    return data.filter((item: number,
                        index: number) => data.indexOf(item) === index);
}

const data: number[] = [7, 3, 6, 4, 3, 3, 4, 9];

console.log(filterDuplicates(data));