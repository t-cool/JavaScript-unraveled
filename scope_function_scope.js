// 関数スコープ

// 関数スコープは、関数内で宣言された変数がその関数内でのみアクセス可能
// varキーワードを使用して宣言された変数は関数スコープを持つ

function function_scope_test() {
    var functionScopedVar = "これは関数スコープの変数です";
    console.log(functionScopedVar); // これは関数スコープの変数です
}

function_scope_test();

// console.log(functionScopedVar); 
// ReferenceError: functionScopedVar is not defined
