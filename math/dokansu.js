function differentiateQuadraticFunction(a, b, c, x) {
    // 二次関数 ax^2 + bx + c の導関数は 2ax + b
    return 2 * a * x + b;
}

// 例: 二次関数 3x^2 + 4x + 5 の x = 2 における導関数の値を計算
const a = 3;
const b = 4;
const c = 5;
const x = 2;

const derivativeValue = differentiateQuadraticFunction(a, b, c, x);
console.log(`導関数の値: ${derivativeValue}`);
