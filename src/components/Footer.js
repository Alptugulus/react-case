import React, { useContext } from 'react'
import { MainContext } from '../context'

function Footer() {

const {budget,balance,expenses}=useContext(MainContext)

const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
const balanceColor = balance < 0 ? 'text-red-500' : balance > 0 ? 'text-green-500' : 'text-black';
return (
    <div className="bg-white text-start flex bottom-0 absolute w-full justify-evenly">
        <div >
      <p className="my-4 text-xl">Toplam Bütçe:</p>
      <p className="mb-4 text-3xl text-center font-bold">{budget}</p>
    </div>
    <div >
      <p className="my-4 text-xl">Toplam Harcama:</p>
      <p className="mb-4 text-3xl text-center font-bold">{totalExpenses}</p>
    </div>
    <div >
      <p className="my-4 text-xl">Bakiye:</p>
      <p className={`mb-4 text-3xl text-center font-bold ${balanceColor}`}>{balance}</p>
    </div>
    </div>
  )
}

export default Footer