import { useState } from 'react';
import './App.css';

function App() {

  const [rowCount, setRowCount] = useState(10);
  const [colCount, setColCount] = useState(10);
  const [input, setInput] = useState('');

  const arr = [];
  const addInput = (e, colNum) => {
    console.log("in line 11");
    return (
      // arr.forEach((row) => {
        setInput(e.target.value);
        // {target.id===colNum ? setInput(e.target.value): null}
    )

  }

  const col = () => {
    const colArr=[];
    for (let i = 0; i < colCount; i++) {
      console.log("col",i);
      colArr.push(<td id={i} value={input} className="grid-col">
        <input className="cell-input" onChange={(e) => addInput(e.target.id)}
          value={input} />
      </td>)
    }
    return colArr;
  }
  const row = () => {
    for (let i = 0; i < rowCount; i++) {
      console.log("row",i);
      arr.push(<tr id={i} className="grid-row">
        {col()}
      </tr>)
    }
    return arr;
  }

  const createTable = () => {
    return (
      row()
    )
  }

  return (
    <div className="App">
      <div className="grid">
        <table className="table">
          <tbody>
            {createTable()}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
