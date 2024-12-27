import React, { useState, useEffect } from "react";
import "../styles/MemoDetail.css";

export default function MemoDetail({ editingMemo, onEdit, onDelete }) {
  const [newContent, setNewContent] = useState(editingMemo.content);

  useEffect(() => {
    setNewContent(editingMemo.content);
  }, [editingMemo]);

  return (
    <div className="memo-detail">
      <textarea
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <div className="buttons">
        <button
          className="edit-button"
          onClick={() => onEdit({ ...editingMemo, content: newContent })}
        >
          編集
        </button>
        <button
          className="delete-button"
          onClick={() => onDelete(editingMemo.id)}
        >
          削除
        </button>
      </div>
    </div>
  );
}
