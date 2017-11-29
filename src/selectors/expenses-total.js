export default (expenses) => {
    return expenses.map((expense) => {
        return expense.amount;
    }).reduce((accumulator, currExpense) =>  { return accumulator + currExpense }, 0);
}