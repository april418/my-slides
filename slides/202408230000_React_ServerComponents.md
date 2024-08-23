class: center, middle

# React / Next.js の新機能

## Server Actions / Server Components を知ろう

Reo YOSHIMOTO / @april418

2024-08-23 社内LT会

---

## Agenda

1. React / Next.js について
2. Server Components とは
3. サーバー / クライアント境界とは
4. Server Actions とは
5. まとめ

---

## React / Next.js について①

### React とは

<img src="https://ja.react.dev/_next/image?url=%2Fimages%2Fuwu.png&w=384&q=75" width="200" height="100" />

- データの読み込みやユーザーアクションによる状態変化の管理と、それに伴う画面の更新を簡単に行えるようにする Javascript / Typescript ライブラリ
  - Javascript ライブラリと言いつつ、実際コードを書くときには JSX という HTML と Javascript を足した言語を使う
  - [React 公式](https://react.dev/)のサンプル👇
    - [カウンターアプリ](https://codesandbox.io/s/ryf69v?file=/src/App.js&utm_medium=sandpack)
    - [Tic-Tac-Toe (⚪︎×ゲーム)](https://codesandbox.io/p/sandbox/react-dev-q2z497?utm_medium=sandpack)

---

## React / Next.js について②

### Next.js とは

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1714730590%2Ffront%2Fnextjs%2Fuwu%2Fnext-uwu-logo.png&w=640&q=75" width="220" height="150" />

- React アプリケーションのビルドサーバーやサーバー / クライアントルーティング、キャッシュ機構などの機能を含んだ Javascript / Typescript フレームワーク
  - React はあくまで画面を簡単に作れるようにする機能しか持たない
    - 👉Next.js のようなビルドとサーバー機能を持ったツールを併用しないと使わないと実行も公開もできない
- このスライドも React と Next.js で作ってるよ💪

---

## Server Actions / Server Components とは

- React 19 / Next 14 から Stable になった機能 (去年末くらい)
  - Next 13 からリリースされてはいた
  - 正直未だにバグや未実装っぽいところはある…😰
- 従来のルーティング機構だった Pages Router ではなく App Router を使う必要がある
  - かなり柔軟なファイルベースルーティング
- 任意の処理・コンポーネントをサーバーサイド処理にできる
  - 環境変数などセキュアな情報を公開せずに済む
  - Node依存のライブラリが使える
- 使いこなせると超便利！😊
  - コード量めっちゃ減る
  - 型安全
- いずれは Remix (React Router) にも導入される予定

---

### Server Components について

- いわゆるサーバーサイドレンダリングされるコンポーネント
- サーバー上で独自のデータに変換されてクライアントに渡される
- 非同期コンポーネントにすることが可能

  ```tsx
  // 👇非同期にできる
  export async function AsyncComponent() {
    // 👇サーバー実行されるためサーバー間通信になる
    // 👇 `useEffect` しなくてよい
    const data = await fetch('https://example.com');

    return (
      <div>
        <p>Data:</p>
        <code>{JSON.stringify(data)}</code>
      </div>
    );
  }
  ```

---

### サーバー / クライアント境界とは

- 以下の場合は Server Component になる
  - `useState` `useEffect` などのフックを使用**していない**
    - 👉🚨エラーになるよ
  - `'use client'` 宣言を**していない**
  - 呼び出し元が `'use client'` 宣言を**していない**
    - これ重要！👇

<pre class="mermaid">
graph LR

P[page.tsx]

subgraph Client
A
B
C
F
end
subgraph Server
D
E
P
end

P --> D["C - Server Component"] --> E["B - Server Component"] -->|境界| F["A - Client Component<br><strong>'use client'</strong>"]
P -->|境界| A["A - Client Component<br><strong>'use client'</strong>"] --> B["B - <s>Server</s> Client Component"] --> C["C - <s>Server</s> Client Component"]
</pre>

---

### Client Component と Server Component まとめ

- Client Component
  - `'use client'` 宣言が必要
  - ブラウザ上での実行
  - `useState` `useEffect` ... などのフックが使用できる
- Server Component
  - Node.js ランタイムでの実行
  - サーバー間通信が可能
  - サーバーの環境変数やファイルシステムなどにアクセス可能
  - Client Component からは呼び出せない

---

### Server Actions について

- サーバー上で実行される関数
- Server Component ならびに **Client Component からも**実行可能

```ts
'use server'; // 👈これ大事
export async function getNodeEnv() {
  const env = process.env.NODE_ENV; // 👈Nextではクライアントからアクセスできない
  console.log(env); // 👈サーバー上のコンソールに出力される
  return env;
}
```

```ts
'use client'; // 👈クライアント実行
import {getNodeEnv} from '...';
export function Component() {
  const [env, setEnv] = React.useState('');

  React.useEffect(() => {
    (async () => setEnv(await getNodeEnv()))(); // 👈サーバー処理を関数として呼び出し
  }, []);

  return <p>isDev? : {env === 'development'}</p>;
}
```

---

class: center middle

## まとめ

### どこまでがサーバー実行でどこからクライアント実行か理解しよう！

### 適切な使い分けで効率よくセキュアに開発しよう！
