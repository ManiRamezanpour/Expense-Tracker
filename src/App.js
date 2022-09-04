import ExpenseApp from "./Common/ExpenseApp";

const App = () => {
  return (
    <div
      className="bg-bg text-text flex flex-col items-center
  h-screen w-full pt-8 
  "
    >
      <header>
        <h2 className="font-bold text-4xl">Expense Tracker</h2>
      </header>
      <ExpenseApp />
    </div>
  );
};

export default App;
