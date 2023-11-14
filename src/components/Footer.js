import React, { useContext } from 'react'
import { MainContext } from '../context'

function Footer() {

const {budget,balance,expenses}=useContext(MainContext)

const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className=" bg-white text-start flex  bottom-0 absolute w-full justify-evenly">
        <div className="">
      <p className="mb-4 text-xl">Toplam Bütçe:</p>
      <p className=" text-3xl text-center font-bold">{budget}</p>
    </div>
    <div className="">
      <p className="mb-4 text-xl">Toplam Harcama:</p>
      <p className="text-3xl text-center font-bold">{totalExpenses}</p>
    </div>
    <div className="">
      <p className="mb-4 text-xl">Bakiye:</p>
      <p className="text-3xl text-center font-bold">{balance}</p>
    </div>
    </div>
  )
}

export default Footer