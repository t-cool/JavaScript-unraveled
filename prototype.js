// オブジェクトがプロパティやメソッドを継承するメカニズム

// 親オブジェクトのコンストラクタ関数
function Animal(name) {
    this.name = name;
}
  
// Animalのプロトタイプにspeakメソッドを追加
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

// 子オブジェクトのコンストラクタ関数
function Dog(name) {
  Animal.call(this, name); // Animalのコンストラクタを呼び出し、nameプロパティを設定
}

// DogのプロトタイプをAnimalのインスタンスに設定し、プロトタイプェーンを構築
Dog.prototype = Object.create(Animal.prototype);

// Dogのプロトタイプにspeakメソッドをオーバーライド
Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
};

// AnimalとDogのインスタンスを作成
let animal = new Animal('Generic Animal');
let dog = new Dog('Rex');

// メソッドの呼び出し
animal.speak(); // Generic Animal makes a noise.
dog.speak();    // Rex barks.

// プロトタイプチェーンの確認
console.log(dog instanceof Dog);     // true
console.log(dog instanceof Animal);  // true

// この例では、Animalが親オブジェクト、Dogが子オブジェクトです。Dogのインスタンスは、Dog自身のプロトタイプからspeakメソッドを見つけ出し、それを実行します。もしDogのプロトタイプにspeakメソッドがなければ、JavaScriptはプロトタイプチェーンを辿ってAnimalのプロトタイプを検索し、そこに定義されているspeakメソッドを実行します。
// このように、プロトタイプチェーンはオブジェクト指向プログラミングの継承を実現するための強力なメカニズムです。  

// JavaScriptにおいて、prototypeと__proto__は異なるものですが、関連性があります。
// prototypeプロパティは、関数オブジェクトに存在します。
// 新しいオブジェクトがその関数をコンストラクタとして使用して作成されるとき、新しいオブジェクトの内部プロトタイプ（[[Prototype]]）はその関数のprototypeプロパティを参照します。
// つまり、prototypeプロパティは、その関数をコンストラクタとして使用して作成されたすべてのオブジェクトが継承するメソッドやプロパティを定義します。
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, " + this.name);
};

const person1 = new Person("John");
person1.sayHello(); // "Hello, John"


// この例では、Person関数のprototypeプロパティにsayHelloメソッドを追加しています。
// person1オブジェクトはPersonコンストラクタから作成されているため、
// Person.prototypeからsayHelloメソッドを継承します。


// __proto__
// __proto__は、オブジェクトが実際に継承しているプロトタイプ（[[Prototype]]チェーンの一部）を指します。
// これはオブジェクトのプロパティであり、
//  そのオブジェクトが作成されたコンストラクタのprototypeプロパティを参照します。
// __proto__は、実際には非標準であり、Object.getPrototypeOf()メソッドを使用することが推奨されます。
