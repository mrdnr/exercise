class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(info){
    if(info instanceof Square){
      return info.side * info.side;
    }else if(info instanceof Rectangle){
      return info.width * info.height;
    }else if(info instanceof Circle){
      return Math.PI * info.radius * info.radius;
    }else {
      throw new Error("Info is error");
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));