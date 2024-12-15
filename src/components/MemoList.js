import React, { useState } from "react";
import "../styles/MemoList.css";

export default function MemoList({ memos, setEditingMemo }) {
  const [selectedMemo, setSelectedMemo] = useState(null);
  return (
    <div>
      <ol>
        {memos.map((memo) => (
          <li
            key={memo.id}
            onClick={() => {
              setEditingMemo(memo);
              setSelectedMemo(memo);
            }}
          >
            <div
              className={`title ${selectedMemo && selectedMemo.id === memo.id ? "selected" : ""}`}
            >
              {memo.content.split("\n")[0] || "無題"}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
