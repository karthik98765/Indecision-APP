const add = (a, b) => {
    return a + b;
};

console.log(add(55, 1));

const user = {
    name: 'Karthik',
    cities: ['Bangalore', 'Mysore', 'Mangalore'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());