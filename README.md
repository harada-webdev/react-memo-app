# react-memo-app

React を使った簡単な SPA のメモアプリです

## セットアップ方法

1. ターミナルの任意の場所で`git clone https://github.com/harada-webdev/react-memo-app.git`でこのリポジトリを`clone`します
2. `react-memo-app`ディレクトリに移動します
3. `git checkout dev`で、現在のブランチを`dev`に移動します
4. アプリケーションに必要となる依存関係を`npm install`でインストールします
5. `npm start`を実行してから、`localhost:3000`をブラウザで開きます

## 利用方法

- `+`ボタンを押すと、自動的に`新規メモ`という内容が書かれたメモが作成され、このメモの編集状態のフォームが表示されます
- メモの内容を変える場合、フォームから内容を書き直して編集ボタンを押すと内容が更新されます。また、編集状態で削除ボタンを押すとメモが削除されます

## 注意点

- メモの内容の 1 行目がタイトルとなり、それ以降がメモの本文となります
- メモのデータはLocalStorageに保存されています
