export default function MemoList({ memos }) {
  return (
    <ol>
      {memos.map((memo) => (
        <li key={memo.id}>{memo.content.split("\n")[0]}</li>
      ))}
    </ol>
  );
}
