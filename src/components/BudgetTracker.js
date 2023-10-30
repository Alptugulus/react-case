import React, { useState } from 'react';

const BudgetTracker = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [balance, setBalance] = useState(budget);

  const handleBudgetChange = (event) => {
    const newBudget = parseFloat(event.target.value);
    setBudget(newBudget);
    setBalance(newBudget - expenses.reduce((total, expense) => total + expense.amount, 0));
  };

  const addExpense = () => {
    if (expenseName && !isNaN(expenseAmount) && expenseDate) {
      const newExpense = {
        name: expenseName,
        amount: parseFloat(expenseAmount),
        date: expenseDate,
      };
      setExpenses([...expenses, newExpense]);
      setExpenseName('');
      setExpenseAmount('');
      setExpenseDate('');
      setBalance(balance - newExpense.amount);
    }
  };

  const deleteExpense = (index) => {
    const deletedExpense = expenses[index];
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    setBalance(balance + deletedExpense.amount);
  };
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);


  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow">
        <div className="w-full h-full flex">
          <div className="w-1/2 flex items-center justify-center bg-gray-700">
            <div>
              <h1 className="text-3xl mb-4 text-white text-left">Bütçe İzleme Uygulaması</h1>
              <div className="mb-6">
                <input
                  type="number"
                  placeholder='Bütçe'
                  value={budget}
                  onChange={handleBudgetChange}
                  className="ml-2 p-2 border border-gray-400"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Gider Adı"
                  value={expenseName}
                  onChange={(e) => setExpenseName(e.target.value)}
                  className="mr-2 p-2 border border-gray-400"
                />
                <input
                  type="number"
                  placeholder="Miktar"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  className="mr-2 p-2 border border-gray-400"
                />
                <input
                  type="date"
                  placeholder="Tarih"
                  value={expenseDate}
                  onChange={(e) => setExpenseDate(e.target.value)}
                  className="mr-2 p-2 border border-gray-400"
                />
                <button onClick={addExpense} className="px-4 py-2 bg-blue-500 text-white rounded">
                  Ekle
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center bg-black">
            <div>
              <h2 className="text-2xl mb-4 text-white text-center">Giderler</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-white">Gider Adı</th>
                    <th className="px-4 py-2 text-white">Miktar (TL)</th>
                    <th className="px-4 py-2 text-white">Tarih</th>
                    <th className="px-4 py-2 text-white">Sil</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2 text-white">{expense.name}</td>
                      <td className="border px-4 py-2 text-white">{expense.amount} TL</td>
                      <td className="border px-4 py-2 text-white">{expense.date}</td>
                      <td className="border px-4 py-2">
                        <button onClick={() => deleteExpense(index)} className="px-2 py-1 bg-red-500 text-white rounded">
                          Sil
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white text-center flex justify-around">
        <div className="p-4">
      <p className="mb-4">Toplam Bütçe:</p>
      <p className="text-xl font-bold">{budget}</p>
    </div>
    <div className="p-4">
      <p className="mb-4">Toplam Harcama:</p>
      <p className="text-xl font-bold">{totalExpenses}</p>
    </div>
    <div className="p-4">
      <p className="mb-4">Bakiye:</p>
      <p className="text-xl font-bold">{balance}</p>
    </div>
</div>
      </div>
    </div>
  );
};

export default BudgetTracker;
