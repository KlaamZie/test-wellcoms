"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterDuplicates(data) {
    return data.filter((item, index) => data.indexOf(item) === index);
}
exports.default = filterDuplicates;
const data = [7, 3, 6, 4, 3, 3, 4, 9];
console.log(filterDuplicates(data));
