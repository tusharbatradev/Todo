import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function addTodo() {
    list.push(value);
    setValue("");
    console.log(list);
  }

  function removeTodo(index) {
    setList((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });
  }

  console.log(value);

  return (
    <>
      <h1>Todo App for Practise</h1>
      <input
        style={{ height: "40px", borderRadius: "8px", fontSize: "18px" }}
        type="text"
        onChange={handleChange}
        value={value}
      />
      <button style={{ marginLeft: "8px" }} onClick={addTodo}>
        ADD
      </button>

      {list.map((todo) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>{todo}</h2>
            <button style={{}} onClick={removeTodo}>
              ❌
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
