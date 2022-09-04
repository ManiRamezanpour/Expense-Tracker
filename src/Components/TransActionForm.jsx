import { useState } from "react";

const TransActionForm = ({ addTransAction }) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submiteHandler = (e) => {
    e.preventDefault();
    addTransAction(formValue);
  };

  return (
    <form
      onSubmit={submiteHandler}
      className="flex justify-center w-75 flex-col"
    >
      <label className="mt-2">Amount</label>
      <input
        onChange={changeHandler}
        name="amount"
        className="w-72 h-8 text-md  px-2 p-px border border-text rounded-md"
        type="number"
        value={formValue.amount}
        placeholder="Amount"
      />
      <label className="mt-2">Description</label>
      <input
        onChange={changeHandler}
        name="desc"
        className="w-72 h-8 text-md  px-2 p-px border border-text rounded-md"
        type="text"
        value={formValue.desc}
        placeholder="description"
      />
      <div className="flex justify-start mt-1">
        <input
          type="radio"
          value="Expense"
          name="type"
          checked={formValue.type === "expense"}
          onChange={changeHandler}
        />
        <label className="px-2">Expense</label>
        <input
          type="radio"
          value="Income"
          name="type"
          checked={formValue.type === "income"}
          className="ml-3"
          onChange={changeHandler}
        />
        <label className="px-2">Income</label>
      </div>
      <button
        type="submite"
        className="bg-text text-bg rounded-md px-3 py-1 mt-2"
      >
        Add transaction
      </button>
    </form>
  );
};

export default TransActionForm;
