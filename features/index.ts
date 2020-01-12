console.log('hi, there!');

class Customer {
  @testDecorator
  color:string = 'red';
  constructor(private name: string) {}

  
  setName(name: string): void {
    this.name = name;
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

const customer = new Customer('daniel');
customer.setName('meng');
