import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useAuth } from "./components/auth-hooks";
import MemoList from "./components/MemoList";
import MemoDetail from "./components/MemoDetail";
import "./styles/App.css";

export default function App() {
  const { isLoggedIn, login, logout } = useAuth();
  const [memos, setMemos] = useState(() => {
    const savedMemos = localStorage.getItem("memos");
    return savedMemos ? JSON.parse(savedMemos) : [];
  });
  const [editingMemo, setEditingMemo] = useState(null);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  function handleAddMemo() {
    const newMemo = { id: uuid(), content: "新規メモ" };
    setMemos([...memos, newMemo]);
    setEditingMemo(newMemo);
  }

  function handleEditMemo(updatedMemo) {
    if (updatedMemo.content.trim() !== "") {
      setMemos(
        memos.map((memo) => (memo.id === updatedMemo.id ? updatedMemo : memo)),
      );
      setEditingMemo(null);
    } else {
      alert("メモの内容を入力してください！");
    }
  }

  function handleDeleteMemo(id) {
    setMemos(memos.filter((memo) => memo.id !== id));
    setEditingMemo(null);
  }

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={logout}>ログアウト</button>
      ) : (
        <button onClick={login}>ログイン</button>
      )}
      <div className="memo-app-container">
        <div>
          <MemoList
            memos={memos}
            setEditingMemo={setEditingMemo}
            editingMemo={editingMemo}
          />
          {isLoggedIn && (
            <button onClick={handleAddMemo} className="add-button">
              +
            </button>
          )}
        </div>
        {editingMemo && (
          <MemoDetail
            editingMemo={editingMemo}
            onEdit={handleEditMemo}
            onDelete={handleDeleteMemo}
          />
        )}
      </div>
    </div>
  );
}
