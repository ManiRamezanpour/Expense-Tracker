import { useEffect, useState } from "react";
import TransActionApp from "../Components/TransActionApp";
import OverViewComponent from "../Components/OverViewComponents";
const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setInCome] = useState(0);
  const [transAction, setTransAction] = useState([]);
  const addTransAction = (formValue) => {
    setTransAction([...transAction, { ...formValue, id: Date.now() }]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transAction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setInCome(inc);
  }, [transAction]);

  return (
    <section className="flex text-md font-medium mt-7 flex-col w-80 p-3 rounded-lg border border-text">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransAction={addTransAction}
      />
      <TransActionApp transAction={transAction} />
    </section>
  );
};

export default ExpenseApp;
