// Factory パターンの実装例 (ES5)

// 製品のインターフェース
function Product(name) {
    this.name = name;
  }
  
  Product.prototype.operate = function() {
    throw new Error("Method 'operate()' must be implemented.");
  };
  
  // 具体的な製品1
  function ConcreteProductA(name) {
    Product.call(this, name);
  }
  
  ConcreteProductA.prototype = Object.create(Product.prototype);
  ConcreteProductA.prototype.constructor = ConcreteProductA;
  
  ConcreteProductA.prototype.operate = function() {
    return this.name + ' is operating in a specific manner A.';
  };
  
  // 具体的な製品2
  function ConcreteProductB(name) {
    Product.call(this, name);
  }
  
  ConcreteProductB.prototype = Object.create(Product.prototype);
  ConcreteProductB.prototype.constructor = ConcreteProductB;
  
  ConcreteProductB.prototype.operate = function() {
    return this.name + ' is operating in a specific manner B.';
  };
  
  // Factory クラス
  var Factory = {
    createProduct: function(type) {
      switch (type) {
        case 'A':
          return new ConcreteProductA('ProductA');
        case 'B':
          return new ConcreteProductB('ProductB');
        default:
          throw new Error('Invalid type.');
      }
    }
  };
  
  // 使用例
  var productA = Factory.createProduct('A');
  console.log(productA.operate()); // ProductA is operating in a specific manner A.
  
  var productB = Factory.createProduct('B');
  console.log(productB.operate()); // ProductB is operating in a specific manner B.