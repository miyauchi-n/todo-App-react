import React from "react";

export const IncompleteTodo = (props) => {
  const { incompTodo, onClick, onDelete } = props;
  return (
    <div className="incomplete">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompTodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>完了</button>
              <button onClick={() => onDelete(index)}>削除</button>
            </div>
          );
          //  途中で呼び出す関数に引数を渡したいときは、前に() => を付ける
        })}
      </ul>
    </div>
  );
};
