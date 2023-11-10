import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // using multiple useState's
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [newExpense, setNewExpense] = useState(false);

  const AddExpenseHandler = () => {
    setNewExpense(true);
  };

  const hideAddExpenseHandler = () => {
    setNewExpense(false);
  };

  //   // using single useState:--> using this we have to use objects
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // use this approach when using multiple useState's
    setEnteredTitle(event.target.value);

    // // use this approach when using single state
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // // this is another way when using single state
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState, enteredTitle: event.target.value
    //     }
    // });
  };

  const amountChangeHandler = (event) => {
    // use this approach when using multiple useState's
    setEnteredAmount(event.target.value);

    // // use this approach when using single state
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    // use this approach when using multiple useStates
    setEnteredDate(event.target.value);

    // // use this approach when using single state
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setNewExpense(false);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        {newExpense ? (
          <div>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Title</label>
                <input
                  type="text"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
              </div>
              <div className="new-expense__control">
                <label>Amount</label>
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={enteredAmount}
                  onChange={amountChangeHandler}
                />
              </div>
              <div className="new-expense__control">
                <label>Date</label>
                <input
                  type="date"
                  min="2021-01-01"
                  max="2024-12-31"
                  value={enteredDate}
                  onChange={dateChangeHandler}
                />
              </div>
            </div>
            <div className="new-expense__buttons">
              <div className="new-expense__actions">
                <button type="button" onClick={hideAddExpenseHandler}>
                  Cancel
                </button>
              </div>
              <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="add-new-expense__actions">
            <button type="button" onClick={AddExpenseHandler}>
              Add New Expense
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default ExpenseForm;
