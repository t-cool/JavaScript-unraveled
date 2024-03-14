let moduleScopedVar = "モジュールスコープの変数1";
let moduleScopedVar2 = "モジュールスコープの変数2";

export function testFunction1() {
    console.log(moduleScopedVar);
}

export function testFunction2() {
    console.log(moduleScopedVar2);
}
