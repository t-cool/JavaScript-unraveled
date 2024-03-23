// Factory パターンの実装例

// 製品のインターフェース
class Product {
    constructor(name) {
      this.name = name;
    }
  
    operate() {
      throw new Error("Method 'operate()' must be implemented.");
    }
  }
  
  // 具体的な製品1
  class ConcreteProductA extends Product {
    operate() {
      return `${this.name} is operating in a specific manner A.`;
    }
  }
  
  // 具体的な製品2
  class ConcreteProductB extends Product {
    operate() {
      return `${this.name} is operating in a specific manner B.`;
    }
  }
  
  // Factory クラス
  class Factory {
    static createProduct(type) {
      switch (type) {
        case 'A':
          return new ConcreteProductA('ProductA');
        case 'B':
          return new ConcreteProductB('ProductB');
        default:
          throw new Error('Invalid type.');
      }
    }
  }
  
  // 使用例
  const productA = Factory.createProduct('A');
  console.log(productA.operate()); // ProductA is operating in a specific manner A.
  
  const productB = Factory.createProduct('B');
  console.log(productB.operate()); // ProductB is operating in a specific manner B.