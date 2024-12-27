import "../styles/MemoList.css";

export default function MemoList({ memos, setEditingMemo, editingMemo }) {
  return (
    <ul>
      {memos.map((memo) => (
        <li
          key={memo.id}
          onClick={() => {
            setEditingMemo(memo);
          }}
        >
          <div
            className={`title ${editingMemo && editingMemo.id === memo.id ? "selected" : ""}`}
          >
            {memo.content.split("\n")[0] || "無題"}
          </div>
        </li>
      ))}
    </ul>
  );
}
