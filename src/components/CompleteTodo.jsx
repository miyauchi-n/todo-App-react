import React from "react";

export const CompleteTodo = (props) => {
  const { compTodo, onClick } = props;
  return (
    <div className="complete">
      <p className="title">完了済みTODO</p>
      <ul>
        {compTodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
