import { useState } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(null);
  const [transaction, setTransaction] = useState([]);

  const Addtrans = (e) => {
    e.preventDefault();
    setTransaction([...transaction, { id: Date.now(), description, amount }]);
  };

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
            {transaction.map((t) => (
              <tr key={t.id}>
                <td>{t.description}</td>
                <td>{t.amount}</td>
                <td>
                  <button>Edit</button>
                  <button id="del">Del</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={Addtrans}>
          {/* <label htmlFor="desc">Description</label> */}
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="desc"
            className="inputs"
            placeholder="Description"
          />
          {/* <label htmlFor="amount">Amount</label> */}
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            className="inputs"
            placeholder="Amount"
          />
          <button>Done</button>
        </form>
      </div>
    </>
  );
}

export default App;
