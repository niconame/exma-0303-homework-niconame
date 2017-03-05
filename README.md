# EXMA Traning 03/03 Homework
* 繳交期限
  * 至 3/10 (五) 的中午 12:00，截止後會暫時移除各位的編輯權
* 繳交方式
  * 推到 homework 分支，並與 master 分支比較發起 Pull Request，推錯地方視同作業繳交失敗
  * 禁止 fork
* 基本要求
  * 範例程式只使用了 ES5 語法以及 $.ajax，請自行依課程內容所教，判斷何處適合使用 ES6 語法並改寫之
  * 替換 $.ajax 成為 fetch API (配合 async / await)
  * 僅可以更改 src 資料夾中的程式碼
* 額外要求（徵酌加分）
  * 程式碼縮排保持一致美觀
  * 你可以在程式碼中加上你的註解，說明你為什麼覺得這裡要這樣改或為什麼不改，幫助作業的批改者理解你的思考以及判斷依據

* 如何運行開發環境
  ```
  git clone git@github.com:tz5514/exma-0303-homework-niconame.git --branch homework
  cd exma-0303-homework-niconame
  npm install
  npm start
  ```
  然後前往 [http://localhost:3000](http://localhost:3000)
  
  當程式碼有所更改並存檔時，Webpack 會自動重新 compile & bundle
  
* 如何繳交作業
  ```
  git push origin homework
  ```
  然後到 [這裡](https://github.com/tz5514/exma-0303-homework-niconame/compare/master...homework) 發起一個 PR
