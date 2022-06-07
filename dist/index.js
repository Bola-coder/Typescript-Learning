"use strict";
let sales = 123456789;
const course = "Typescript";
const isPublished = true;
let level;
let numbers = [1, 2, 3, 4];
let users = [1, "Bolarinwa"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2016);
//# sourceMappingURL=index.js.map