// 1. フィボナッチ数列を求める
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 2. 階乗を求める
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// 3. 配列の合計を求める
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

// 4. 配列内の最大値を求める
function findMax(arr) {
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0], findMax(arr.slice(1)));
}

// 5. 配列を逆順にする
function reverseArray(arr) {
    if (arr.length === 0) return [];
    return reverseArray(arr.slice(1)).concat(arr[0]);
}

// 6. 階乗の結果を逆順で出力する
function printFactorialsDescending(n) {
    if (n === 0) return [];
    return [factorial(n)].concat(printFactorialsDescending(n - 1));
}

// 7. 数字が回文かどうかを判定する
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

// 8. 2のべき乗を求める
function powerOfTwo(n) {
    if (n === 0) return 1;
    return 2 * powerOfTwo(n - 1);
}

// 9. 文字列内の母音をカウントする
function countVowels(str) {
    if (str.length === 0) return 0;
    let vowels = "aeiouAEIOU";
    let count = vowels.includes(str[0]) ? 1 : 0;
    return count + countVowels(str.slice(1));
}

// 10. ネストされた配列をフラットにする
function flattenArray(arr) {
    if (arr.length === 0) return [];
    if (Array.isArray(arr[0])) {
        return flattenArray(arr[0]).concat(flattenArray(arr.slice(1)));
    } else {
        return [arr[0]].concat(flattenArray(arr.slice(1)));
    }
}

// 使用例
console.log(fibonacci(10)); // 55
console.log(factorial(5)); // 120
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(findMax([3, 1, 4, 1, 5, 9])); // 9
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(printFactorialsDescending(5)); // [120, 24, 6, 2, 1]
console.log(isPalindrome("racecar")); // true
console.log(powerOfTwo(5)); // 32
console.log(countVowels("hello")); // 2
console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
