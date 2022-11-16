import React from "react";

//  JSでスタイル定義するときは文字列で指定しカンマで区切る（オブジェクト型）
const style = {
  backgroundColor: "#cc4e4e",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { inputText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={inputText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
