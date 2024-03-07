/*
このコードは、オブザーバーパターンをJavaScript（ES5スタイル）で実装したものです。オブザーバーパターンは、オブジェクト間の一対多の依存関係を作成し、あるオブジェクトの状態が変わったときに、そのオブジェクトに依存するすべてのオブジェクトに自動的に通知が行われるようにするデザインパターンです。

主なコンポーネント
Subject（被観察者）: オブザーバー（観察者）を登録、削除、通知するメソッドを持つ。この例ではSubject関数がこの役割を果たしています。
Observer（観察者）: Subjectから通知を受け取るときに実行されるupdateメソッドを持つ。この例ではObserver関数がこの役割を果たしています。

実装の流れ
1. Subjectの作成: Subjectコンストラクタ関数を使用して、オブザーバーのリストを持つSubjectオブジェクトを作成します。
2. Observerの作成: Observerコンストラクタ関数を使用して、特定の振る舞い（behavior）を実行するObserverオブジェクトを作成します。
3. オブザーバーの登録: Subjectのsubscribeメソッドを使用して、ObserverをSubjectに登録します。
4. 通知の送信: Subjectの状態が変わったとき（この例では手動でnotifyメソッドを呼び出しています）、Subjectはnotifyメソッドを使用して、登録されているすべてのオブザーバーに通知します。各オブザーバーは、そのupdateメソッドを通じて通知を受け取ります。
5. オブザーバーの登録解除: 必要に応じて、Subjectのunsubscribeメソッドを使用して、特定のオブザーバーの登録を解除できます。

使用例
このコードでは、subjectというSubjectオブジェクトに対して、observer1とobserver2という2つのObserverオブジェクトを登録しています。その後、subject.notify('Hello World!');を呼び出して、すべてのオブザーバーに'Hello World!'というデータを通知しています。その後、observer1の登録を解除し、再度異なるデータで通知を行っています。
*/

// Subjectコンストラクタ
function Subject() {
    this.observers = []; // オブザーバーのリスト
  }
  
  // オブザーバーを追加するメソッド
  Subject.prototype.subscribe = function(observer) {
    this.observers.push(observer);
    console.log('Observer added.');
  };
  
  // オブザーバーを削除するメソッド
  Subject.prototype.unsubscribe = function(observerToRemove) {
    this.observers = this.observers.filter(observer => {
      return observer !== observerToRemove;
    });
    console.log('Observer removed.');
  };
  
  // すべてのオブザーバーに通知するメソッド
  Subject.prototype.notify = function(data) {
    this.observers.forEach(observer => observer(data));
  };
  
  // Observerコンストラクタ
  function Observer(behavior) {
    this.behavior = behavior;
  }
  
  // Observerの振る舞いを実行するメソッド
  Observer.prototype.update = function(data) {
    this.behavior(data);
  };
  
  // 使用例
  var subject = new Subject();
  
  var observer1 = new Observer(function(data) {
    console.log("Observer 1 received data: " + data);
  });
  
  var observer2 = new Observer(function(data) {
    console.log("Observer 2 received data: " + data);
  });
  
  // オブザーバーをサブスクライブ
  subject.subscribe(observer1.update.bind(observer1));
  subject.subscribe(observer2.update.bind(observer2));
  
  // オブザーバーにデータを通知
  subject.notify('Hello World!');
  
  // オブザーバーをアンサブスクライブ
  subject.unsubscribe(observer1.update.bind(observer1));
  
  // 再度、オブザーバーにデータを通知
  subject.notify('Second message');