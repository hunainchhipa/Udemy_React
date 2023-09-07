import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filteredInfo, setFilteredInfo] = useState("2022, 2023 & 2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    if (selectedYear === "2021") {
      setFilteredInfo("2022, 2023 & 2024");
    } else if (selectedYear === "2022") {
      setFilteredInfo("2021, 2023 & 2024");
    } else if (selectedYear === "2023") {
      setFilteredInfo("2021, 2022 & 2024");
    } else {
      setFilteredInfo("2021, 2022 & 2023");
    }
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={filterChangeHandler}
        />
        <p>Data for years {filteredInfo} is hidden.</p>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </>
  );
}

export default Expenses;
