/*
Mix-in デザインパターンは、オブジェクト指向プログラミングにおいて、
クラスにメソッドやプロパティを動的に追加するための手法です。

このパターンは、特にJavaScriptのようなプロトタイプベースの言語で有用です。

Mix-inは、複数の継承の代替として使用されることが多く、
異なるクラスからメソッドやプロパティを「混ぜ合わせる」ことができます。
*/

// 可能な機能を提供する Mix-in
var SerializableMixin = {
    serialize: function() {
      return JSON.stringify(this);
    }
  };
  
var AreaMixin = {
  setArea: function(width, height) {
    this.width = width;
    this.height = height;
  },
  getArea: function() {
    return this.width * this.height;
  }
};

// クラスに Mix-in を適用する関数
function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach(baseCtor => {
    console.log(Object.getOwnPropertyNames(baseCtor));
    Object.getOwnPropertyNames(baseCtor).forEach(name => {
      derivedCtor.prototype[name] = baseCtor[name];
    });
  });
}
/*
applyMixins関数の引数derivedCtorとbaseCtorsは、それぞれ「派生コンストラクタ」と「基底コンストラクタの配列」を意味しています。これらの名前は、関数がミックスインを適用する際の役割を反映しています。

derivedCtor（派生コンストラクタ）: この引数は、ミックスインを適用する対象のクラス（またはコンストラクタ関数）を指します。このクラスは、ミックスインによって新しいメソッドやプロパティを追加される「派生クラス」として機能します。

baseCtors（基底コンストラクタの配列）: この引数は、ミックスインとして適用される機能（メソッドやプロパティ）を持つオブジェクトの配列を指します。これらのオブジェクトから、derivedCtorで指定されたクラスにメソッドやプロパティがコピーされます。つまり、これらは「基底クラス」の役割を果たし、その機能を派生クラスに提供します。

この命名規則は、オブジェクト指向プログラミングにおける「継承」の概念を反映しています。ただし、JavaScriptのミックスインは、伝統的なクラスベースの継承とは異なり、オブジェクト間で直接メソッドやプロパティを共有することによって実現されます。
*/


// 基本クラス
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// Mix-in を適用
applyMixins(Rectangle, [SerializableMixin, AreaMixin]);

// 使用例
const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea()); // 200
console.log(rectangle.serialize()); // {"width":10,"height":20}