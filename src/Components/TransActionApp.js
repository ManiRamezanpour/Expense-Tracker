const TransActionApp = ({ transAction }) => {
  return (
    <section>
      {transAction.map((t) => (
        <div
          key={t.id}
          className="flex w-72 h-8 justify-between items-center px-5 bg-slate-400 mt-2 rounded-md"
        >
          <span>{t.desc}</span>
          <span>{t.amount}$</span>
        </div>
      ))}
    </section>
  );
};

export default TransActionApp;
