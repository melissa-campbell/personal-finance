console.log("hi");

let monthlyExpenses = 0;
let emergencyFund = 0;
let retirementFund = 0;

//sum user input
function getMonthlyExpenses() {
    console.log(" getUserExpenses");

    monthlyExpenses = parseInt(mortgage.value)
    //fixed expenses 
    + parseInt(tax.value)
    + parseInt(auto.value)   
    + parseInt(internet.value)
    + parseInt(phone.value)
    + parseInt(loan.value)

    //variable expenses
    + parseInt(electric.value)
    + parseInt(water.value)
    + parseInt(groceries.value)
    + parseInt(restaurants.value)
    + parseInt(pets.value)
    + parseInt(vacation.value)
    + parseInt(fun.value);

    console.log(monthlyExpenses);
    return monthlyExpenses;
}

//multiply user input x 6 months
function getEmergencyFund(monthlyExpenses) {
    console.log(" getEmergencyFund");
    emergencyFund = monthlyExpenses * 6;
    console.log(emergencyFund);
    return emergencyFund;
}

//multiply user input x 12 months x 25 years
function getRetirementFund(monthlyExpenses) {
    console.log(" getRetirementFund");
    retirementFund = monthlyExpenses * 12 * 25;
    console.log(retirementFund);
    return retirementFund;
}

let submit = document.getElementById("button-submit");
submit.addEventListener("click", function(){
    console.log("submit clicked");
    monthlyExpenses = getMonthlyExpenses();
    emergencyFund = getEmergencyFund(monthlyExpenses);
    retirementFund = getRetirementFund(monthlyExpenses);

    let message = `<h2>Savings Goals</h2>
    <p>You are currently spending $${monthlyExpenses} each month.</p>
    <p>At this rate, you should save $${emergencyFund} to cover 6 months in case of an emergency.</p>
    <p>You should aim to save $${retirementFund} for your retirement.</p>
    <p>Feel free to adjust the numbers to more accurately reflect your desired spending in retirement.</p>`
    console.log(message);
    //TODO - Display on page!!!
    document.getElementById("goals").innerHTML = message;
})







