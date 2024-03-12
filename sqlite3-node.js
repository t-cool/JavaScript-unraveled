const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./test.db");

db.serialize(() => {
  // テーブルを作成
  db.run("CREATE TABLE IF NOT EXISTS members(name TEXT, age INTEGER)");

  // データを挿入
  const stmt = db.prepare("INSERT INTO members(name, age) VALUES (?, ?)");
  stmt.run("hoge", 33);
  stmt.run("foo", 44);
  stmt.finalize();

  // データを選択して出力
  db.each("SELECT name, age FROM members", (err, row) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log(`${row.name} ${row.age}`);
  });
});

// データベースを閉じる
db.close();