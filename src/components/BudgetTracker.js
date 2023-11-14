import React, { useRef } from 'react';
import { MainContext,useContext } from '../context';
import { Toast } from 'primereact/toast';
const BudgetTracker = () => {


  // const handleEmailChange = (e) => {
  //   const enteredNumber = e.target.value;
  //   const emailRegex = /^/[0-9];
  //   if( !emailRegex.test(enteredNumber) )
  //   {
  //     setExpenseName(enteredNumber)
  //   }
  // };
  
  const {budget,
    setBudget,
    expenses, 
    setExpenses,
    expenseName,
    setExpenseName,
    expenseAmount,
    setExpenseAmount,
    expenseDate,
    setExpenseDate,
    balance,
    setBalance}=useContext(MainContext)

  const handleBudgetChange = (event) => {
    const newBudget = parseFloat(event.target.value);
    setBudget(newBudget);
    setBalance(newBudget - expenses.reduce((total, expense) => total + expense.amount, 0));
  };
  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
}

  const addExpense = () => {
    if (expenseName && !isNaN(expenseAmount) ) {
      const newExpense = {
        name: expenseName,
        amount: parseFloat(expenseAmount),
        date:expenseDate
      };
      setExpenses([...expenses, newExpense]);
      setExpenseName('');
      setExpenseAmount('');
      setExpenseDate('');
      setBalance(balance - newExpense.amount);
    }
    showSuccess();
  };


  const deleteExpense = (index) => {
    const deletedExpense = expenses[index];
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    setBalance(balance + deletedExpense.amount);
  };

  const toast = useRef(null);

  

  return (
    <div className="h-screen flex flex-col">
      <Toast ref={toast} />
      <div className="flex-grow">
        <div className="w-full h-full flex ">
          <div className="w-1/2 flex items-center justify-center bg-add-panel px-5">
            <div>
              <h1 className="text-3xl mb-4 text-white text-left">Bütçe İzleme Uygulaması</h1>
              <div className="mb-6">
                <input
                  type="number"
                  placeholder='Bütçe'
                  value={budget}
                  onChange={handleBudgetChange}
                  className=" p-2 rounded-md w-full text-white text-xl hover:bg-white hover:text-black transition duration-700  bg-input-gray "
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Gider Adı"
                  value={expenseName}
                  onChange={(e) => setExpenseName(e.target.value)}
                  className="mr-2 p-2 rounded-md text-white bg-input-gray mt-5 my-5"
                />
                <input
                  type="number"
                  placeholder="Miktar"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  className="mr-2 p-2  rounded-md text-white bg-input-gray my-5 "
                />
                <input
                  type="date"
                  placeholder="Tarih"
                  value={expenseDate}
                  onChange={(e) => setExpenseDate(e.target.value)}
                  className="mr-2 p-2 rounded-md text-white bg-input-gray my-5 "
                />
                <button onClick={addExpense} className="px-4 py-2 text-white rounded">
                <img src="plus.png" alt="add" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center bg-black">
            <div>
              <h2 className="text-2xl mb-4 text-lime-green text-start">Giderler</h2>
              <table className="w-full">
               <thead className="flex content-between">
               <tr>
                 <th className="px-6 py-3 text-white">Gider Adı</th>
                 <th className="px-6 py-3 text-white">Miktar (TL)</th>
                 <th className="px-6 py-3 text-white">Sil</th>
              </tr>
               </thead>
                <tbody>
                  {expenses.map((expense, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2 text-white">{expense.name}</td>
                      <td className="border px-4 py-2 text-white">{expense.amount}</td>
                      <td className="border px-4 py-2">
                        <button onClick={() => deleteExpense(index)} className="px-2 py-1">
                          <img src="delete.png" alt="delete" className='w-8 h-8'/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
