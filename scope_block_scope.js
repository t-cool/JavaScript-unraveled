{
    // `let`キーワードを使用してブロックスコープの変数`lx`を宣言し、1を代入します。
    let lx = 1;
}

{
    // `const`キーワードを使用してブロックスコープの定数`cx`を宣言し、2を代入します。
    // `const`で宣言された変数は再代入できません。
    const cx = 2;
}

{
    // `var`キーワードを使用して関数スコープの変数`vx`を宣言し、3を代入します。
    // `var`で宣言された変数はブロックスコープの制約を受けません。
    var vx = 3;
}

// `vx`は`var`で宣言されているため、ブロック外からもアクセス可能です。
console.log(vx); // 3を出力

// console.log(lx);
// ReferenceError: lx is not defined
// `lx`は`let`で宣言されているため、ブロック外からはアクセスできず、エラーを引き起こします。

// console.log(cx);
// ReferenceError: cx is not defined
// `cx`も`const`で宣言されているため、ブロック外からはアクセスできず、エラーを引き起こします。
