import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import MemoList from "./components/MemoList";

export default function App() {
  const [memos, setMemos] = useState(() => {
    const savedMemos = localStorage.getItem("memos");
    return savedMemos ? JSON.parse(savedMemos) : [];
  });

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  function handleAddMemo() {
    const newMemo = { id: uuid(), content: "新規メモ" };
    setMemos([...memos, newMemo]);
  }

  return (
    <>
      <MemoList memos={memos} />
      <button onClick={handleAddMemo}>+</button>
    </>
  );
}
