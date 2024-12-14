export default function MemoList({ memos, setEditingMemo }) {
  return (
    <ul>
      {memos.map((memo) => (
        <li key={memo.id} onClick={() => setEditingMemo(memo)}>
          {memo.content.split("\n")[0] || "無題"}
        </li>
      ))}
    </ul>
  );
}
