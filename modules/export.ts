import { sum } from "./modules/export.js";
//* TYPES
var name1: string = "Ahmed";
var age: number = 22;
//* UNION TYPE
var id: number | string = 10;
id = "ST-10";
//* FUNCTION
function multiply(x: number, y: number): number {
  return x * y;
}
//* INTERFACE
interface Student {
  name: string;
  age: number;
}
var student1: Student = { name: "Ali", age: 20 };
//* GENERIC
function showData<T>(data: T): T {
  return data;
}
//* ENUM
enum Direction { UP, DOWN, LEFT, RIGHT }
//* DECORATOR ---- SELF STUDY
//* RECTANGLE
class Rectangle {
  constructor(public width: number, public height: number) {}
  CalcCircumference(): number {
    return 2 * (this.width + this.height);
  }
}
var rectangle1 = new Rectangle(10, 5);
console.log(name1, age, id);
console.log(multiply(4, 5));
console.log(student1);
console.log(showData<string>("Hello"));
console.log(Direction.UP);
console.log(sum(5, 7));
var result = document.getElementById("result");
if (result) {
  result.innerHTML = `Circumference: ${rectangle1.CalcCircumference()}<br>Thank YOU`;
}
