// 1. カウンターの作成
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            return ++count;
        },
        decrement: function() {
            return --count;
        },
        getCount: function() {
            return count;
        }
    };
}

// 2. プライベート変数の実装
function createWallet() {
    let balance = 0;  // プライベート変数
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return `${amount}円が預け入れられました。残高: ${balance}円`;
            }
        },
        withdraw: function(amount) {
            if (amount > 0 && balance >= amount) {
                balance -= amount;
                return `${amount}円が引き出されました。残高: ${balance}円`;
            }
            return '残高が不足しています';
        }
    };
}

// 3. 部分適用
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

// 使用例：
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

const wallet = createWallet();
console.log(wallet.deposit(1000));  // 1000円が預け入れられました。残高: 1000円
console.log(wallet.withdraw(500));  // 500円が引き出されました。残高: 500円

const multiplyByFive = multiply(5);
console.log(multiplyByFive(3)); // 15

/*
1. カウンター機能
内部状態（count）を保持しながら、increment/decrementの操作を提供
外部からは直接countにアクセスできない

2. プライベート変数を持つウォレット
balanceという内部状態を安全に管理
適切なメソッドを通じてのみ操作可能

3. 部分適用
関数の引数を部分的に固定して新しい関数を作成
コードの再利用性を高める
*/