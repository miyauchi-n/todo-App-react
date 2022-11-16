import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  //  入力値のState化
  const [inputText, setInputText] = useState("");

  //  タスク表示のState化
  const [incompTodo, setIncompTodo] = useState([]);
  const [compTodo, setCompTodo] = useState([]);

  //  使用する関数
  const onChangeInputText = (event) => setInputText(event.target.value);
  const onClickAdd = () => {
    if (inputText === "") {
      alert("TODOを入力してください");
      return;
    }
    const newTodo = [...incompTodo, inputText];
    setIncompTodo(newTodo);
    setInputText("");
  };

  //  削除ボタン
  //  引数でどのボタンを押してるか判別
  const onClickDelete = (index) => {
    const newTodo = [...incompTodo];
    //  splice=指定したindex（第一引数）から1つ（第二引数）ぶん消す
    newTodo.splice(index, 1);
    setIncompTodo(newTodo);
  };
  //  完了ボタン
  const onClickComplete = (index) => {
    onClickDelete(index);

    const newCompTodo = [...compTodo, incompTodo[index]];
    setCompTodo(newCompTodo);
  };
  //  戻すボタン
  const onClickBack = (index) => {
    const newCompTodo = [...compTodo];
    newCompTodo.splice(index, 1);
    setCompTodo(newCompTodo);

    const newIncompTodo = [...incompTodo, compTodo[index]];
    setIncompTodo(newIncompTodo);
  };

  return (
    <>
      <InputTodo
        inputText={inputText}
        onChange={onChangeInputText}
        onClick={onClickAdd}
        disabled={incompTodo.length >= 5}
      />
      {incompTodo.length >= 5 && (
        <p style={{ color: "red" }}>登録できるタスクは5個までです</p>
      )}
      <IncompleteTodo
        incompTodo={incompTodo}
        onClick={onClickComplete}
        onDelete={onClickDelete}
      />
      <CompleteTodo compTodo={compTodo} onClick={onClickBack} />
    </>
  );
};
