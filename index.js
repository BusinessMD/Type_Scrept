import { sum } from "./modules/export.js";
//* TYPES
var name1 = "Ahmed";
var age = 22;
//* UNION TYPE
var id = 10;
id = "ST-10";
//* FUNCTION
function multiply(x, y) {
    return x * y;
}
var student1 = { name: "Ali", age: 20 };
//* GENERIC
function showData(data) {
    return data;
}
//* ENUM
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
//* DECORATOR ---- SELF STUDY
//* RECTANGLE
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    CalcCircumference() {
        return 2 * (this.width + this.height);
    }
}
var rectangle1 = new Rectangle(10, 5);
console.log(name1, age, id);
console.log(multiply(4, 5));
console.log(student1);
console.log(showData("Hello"));
console.log(Direction.UP);
console.log(sum(5, 7));
var result = document.getElementById("result");
if (result) {
    result.innerHTML = `Circumference: ${rectangle1.CalcCircumference()}<br>Thank YOU`;
}
