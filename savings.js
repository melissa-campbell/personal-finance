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

//validate user entry
function validateUserInput (){
    if ( mortgage.value =="" || mortgage.value < 0 ||
    tax.value =="" || tax.value < 0 ||
    auto.value =="" || auto.value < 0 ||
    internet.value =="" || internet.value < 0 ||
    phone.value =="" || phone.value < 0 ||
    loan.value =="" || loan.value < 0 ||
    electric.value =="" || electric.value < 0 ||
    water.value =="" || water.value < 0 ||
    gas.value =="" || gas.value < 0 ||
    groceries.value =="" || groceries.value < 0 ||
    restaurants.value =="" || restaurants.value < 0 ||
    pets.value =="" || pets.value < 0 ||
    vacation.value =="" || vacation.value < 0 ||
    fun.value =="" || fun.value < 0 ) {

    alert("Please enter 0 or greater for all fields.");
    return false;
    }
}

//submit button press
let submit = document.getElementById("button-submit");
submit.addEventListener("click", function(){
    console.log("submit clicked");

    //validate user entry, stop if missing anything
    if (validateUserInput() == false){
        return;
    }
      
    //run calculations
    monthlyExpenses = getMonthlyExpenses();
    emergencyFund = getEmergencyFund(monthlyExpenses);
    retirementFund = getRetirementFund(monthlyExpenses);

    //display custom goals within HTML
    let message = `<h2>Savings Goals</h2>
    <p>You are currently spending $${monthlyExpenses} each month.</p>
    <p>At this rate, you should save $${emergencyFund} to cover 6 months in case of an emergency.</p>
    <p>You should aim to save $${retirementFund} for your retirement.</p>
    <p>Feel free to adjust the numbers to more accurately reflect your desired spending in retirement.</p>`
        
    document.getElementById("goals").innerHTML = message;
})







