/*
プロトタイプパターンは、JavaScriptにおいて非常に重要な概念であり、オブジェクト間でプロパティやメソッドを共有するための効率的な方法を提供します。このパターンを使用すると、新しいオブジェクトを作成する際に、既存のオブジェクトのプロパティやメソッドを継承することができます。

プロトタイプパターン => 継承のメカニズム

以下に、犬（Dog）クラスを作成し、そのプロトタイプにメソッドを追加する例を示します。さらに、Dogクラスを継承して、特別な能力（飛ぶことができる）を持つSuperDogクラスを作成します。
*/

// Dogクラスの定義
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`Woof!`);
  }
}

// Dogクラスのインスタンスを作成
const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

// プロトタイプにplayメソッドを追加
Dog.prototype.play = function() {
  console.log(`${this.name} is playing now!`);
};

// playメソッドの使用
dog1.play(); // Daisy is playing now!

// SuperDogクラスの定義 - Dogクラスを継承
class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name} is flying!`);
  }
}

// SuperDogクラスのインスタンスを作成
const superDog = new SuperDog("Hanako");

// 継承したメソッドと新しいメソッドの使用
superDog.bark(); // Woof!
superDog.fly(); // Krypto is flying!