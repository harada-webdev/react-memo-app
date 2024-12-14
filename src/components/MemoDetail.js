import React, { useState, useEffect } from "react";

export default function MemoDetail({ editingMemo, onEdit, onDelete }) {
  const [newContent, setNewContent] = useState(editingMemo.content);

  useEffect(() => {
    setNewContent(editingMemo.content);
  }, [editingMemo]);

  return (
    <>
      <textarea
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <button onClick={() => onEdit({ ...editingMemo, content: newContent })}>
        編集
      </button>
      <button onClick={() => onDelete(editingMemo.id)}>削除</button>
    </>
  );
}
