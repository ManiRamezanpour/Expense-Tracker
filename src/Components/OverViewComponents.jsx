import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center ">
        <h1 className="font-bold text-xl">Balance : {income - expense} $</h1>
        <button
          className="bg-text text-bg rounded-md px-3 py-1"
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? "Cancle" : "Add"}
        </button>
      </div>
      {isShow && <TransActionForm addTransAction={addTransAction} />}
      <div className="flex justify-between items-center my-3">
        <div className="flex flex-col font-semibold text-xl justify-start border p-3 w-32 border-text rounded-md">
          Expense :<span className="text-red-500 font-bold text-2xl"> {expense} $</span>
        </div>
        <div className="flex flex-col font-semibold text-xl justify-start border p-3 w-32 border-text rounded-md">
          income :<span className="text-green-500 font-bold text-2xl">{income} $</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
