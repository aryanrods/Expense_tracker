import { useState } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [transaction, setTransaction] = useState([]);
  const [editId, setEditId] = useState(null);

  const Addtrans = (e) => {
    e.preventDefault();
    if (editId) {
      const newtransaction = transaction.map((t) =>
        editId === t.id ? { id: editId, description, amount } : t
      );
      setTransaction(newtransaction);
      setEditId(null);
      setDescription("");
      setAmount("");
    } else {
      setTransaction([...transaction, { id: Date.now(), description, amount }]);
      setDescription("");
      setAmount("");
    }
  };

  const handledel = (id) => {
    const trans = transaction.filter((tran) => tran.id != id);

    setTransaction(trans);
  };

  const handleEdit = (t) => {
    setEditId(t.id);
    setAmount(t.amount);
    setDescription(t.description);
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
                  <button
                    onClick={(e) => {
                      handleEdit(t);
                    }}
                  >
                    Edit
                  </button>
                  <button id="del" onClick={(e) => handledel(t.id)}>
                    Del
                  </button>
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
            className="inputs"
            placeholder="Description"
            value={description}
          />
          {/* <label htmlFor="amount">Amount</label> */}
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            className="inputs"
            placeholder="Amount"
            value={amount}
          />
          <button>Done</button>
        </form>
      </div>
    </>
  );
}

export default App;
