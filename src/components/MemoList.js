import React, { useState } from "react";
import "../styles/MemoList.css";

export default function MemoList({ memos, setEditingMemo }) {
  const [selectedMemo, setSelectedMemo] = useState(null);
  return (
    <div className="memo-list">
      <ol>
        {memos.map((memo) => (
          <li
            key={memo.id}
            onClick={() => {
              setEditingMemo(memo);
              setSelectedMemo(memo);
            }}
            className={
              selectedMemo && selectedMemo.id === memo.id ? "selected" : ""
            }
          >
            <div className="memo-title">
              {memo.content.split("\n")[0] || "無題"}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
