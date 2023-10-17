const express = require("express"); //require関数でExpressを読み込む
const app = express(); //読み込んだExpressを初期化してapp変数に格納
const port = 3000; //HTTPサーバーのport番号指定

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.end(" Top Page");
}); //サーバーへgetメソッドでrequestがあった場合の処理

//app.listen関数を使ってサーバを起動
app.listen(port, () => {
  console.log(` Server is running on http:// localhost:${port}`);
});
