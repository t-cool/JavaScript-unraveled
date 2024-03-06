/*
Proxyパターン

Proxyオブジェクトを使うと、特定のオブジェクトとのやりとりをよりコントロールできるようになる。例えば、値を取得するときや値を設定するときなどだ。

一般的に、プロキシとは誰かの代役を意味する。その人に直接話しかける代わりに、あなたが話しかけようとした人の代理であるプロキシに話しかけることになる。JavaScriptでも同じことが起こります。ターゲット・オブジェクトと直接やりとりする代わりに、プロキシ・オブジェクトとやりとりするのです。
*/

const person = {
    name: "John Doe",
    age: 42,
    nationality: "American"
};
  
const personProxy = new Prox(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true;
  }
});

personProxy.name;
personProxy.age = 43;