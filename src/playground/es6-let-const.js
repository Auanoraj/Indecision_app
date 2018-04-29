const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 5,
    multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());