import { useState } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <>
      <div className="body-wrap">
        <h1 className="header">Expense Tracker</h1>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <form action="submit">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            value={description}
            name="desc"
            className="inputs"
            id="desc"
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            value={amount}
            htmlFor="amount"
            name="desc"
            className="inputs"
            id="amount"
          />
          <button>Done</button>
        </form>
      </div>
    </>
  );
}

export default App;
