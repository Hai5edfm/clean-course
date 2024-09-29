
type Size = '' | 'S' | 'M' | 'L' | 'XL';


class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ) {}

  toString() {
    this.validateProperties();

    return `Product: ${this.name}, Price: ${this.price}, Size: ${this.size}`;
  }

  validateProperties() {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if (this[key].length <= 0) {
            throw new Error(`Property ${key} is empty`);
          }
          break;
        case 'number':
          if (this[key] <= 0) {
            throw new Error(`Property ${key} is less than or equal to 0`);
          }
          break;
        default:
          break
      }
    }
  }
}

(() => {
  const bluePants = new Product('Blue Pants', 100);

  console.log(bluePants);

})();

