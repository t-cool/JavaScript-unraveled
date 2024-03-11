/*
JavaScriptのアロー関数では、thisはその関数が定義された時のコンテキストを捉えます。アロー関数がオブジェクトリテラル内で定義されていても、そのthisは外側のスコープ（つまり、そのオブジェクトリテラルを含む関数やグローバルスコープ）のthisを参照します。

objオブジェクトのarrowFunctionがアロー関数で定義されているため、この関数のthisはobjオブジェクト自身を指すのではなく、objを定義している外側のスコープのthisを指します。通常、ブラウザのグローバルスコープでのthisはwindowオブジェクトを指します。そのため、arrowFunction内でthis.valueを呼び出しても、objオブジェクトのvalueプロパティを参照するのではなく、グローバルスコープ（windowオブジェクト）のvalueプロパティを参照しようとします。しかし、グローバルスコープにvalueプロパティが存在しないため、undefinedが結果として得られます。

一方で、objのnormalFunctionは通常の関数として定義されています。通常の関数では、thisはその関数が呼び出されるコンテキストに基づいて決定されます。obj.normalFunction()のようにメソッドとして呼び出されると、thisはそのメソッドを呼び出したオブジェクト（この場合はobj）を指します。そのため、normalFunction内でthis.valueは'オブジェクトの値'を正しく参照します。

この挙動は、アロー関数がどのようにthisを扱うかを理解する上で重要です。アロー関数は、メソッドやイベントハンドラとして使用する場合には注意が必要です。そのコンテキストに依存するthisの値を期待している場合、通常の関数を使用する方が適切かもしれません。
*/

// アロー関数を用いた場合
const arrowFunction = () => {
    console.log(this); // アロー関数内のthisは、外側のスコープ（定義された場所のスコープ）のthisを指します。
  };
arrowFunction(); // グローバルオブジェクトを指す（ブラウザではwindow、Node.jsではglobalオブェクト）
  
// functionキーワードを用いた場合
function normalFunction() {
  console.log(this); // 通常の関数内のthisは、その関数が呼び出されたコンテキストに依存します。
}
normalFunction(); // グローバルオブジェクトを指す（ブラウザではwindow、Node.jsではglobalオブェクト）

// オブジェクトのメソッドとして関数を定義
const obj = {
  value: 'オブジェクトの値',
  arrowFunction: () => {
    // console.log(this.value);
    // アロー関数では、外側のスコープ（ここではグローバルスコープ）のthisを指し、'value'はundefinedになります。
  },
  normalFunction: function() {
    console.log(this.value);
    // 通常の関数では、その関数が属するオブジェクト（ここではobj）のthisを指します。
  }
};

obj.arrowFunction(); // undefined
obj.normalFunction(); // "オブジェクトの値"