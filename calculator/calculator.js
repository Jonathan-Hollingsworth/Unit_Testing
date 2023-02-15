window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.getElementById("loan-amount")
  const loanYears = document.getElementById("loan-years")
  const loanRate = document.getElementById("loan-rate")
  const initialMonthly = document.getElementById("monthly-payment")
  loanAmount.value = 10000
  loanYears.value = 3
  loanRate.value = 15
  const initial = {"amount": 10000, "rate": 15, "years": 3}
  initialMonthly.textContent = `$${calculateMonthlyPayment(initial)}`
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const UIValues = getCurrentUIValues()
  const monthlyRate = calculateMonthlyPayment(UIValues)
  updateMonthly(monthlyRate)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const interest = (values["rate"] / 100) / 12
  const paymentCount = Math.floor(values["years"] * 12)
  const result = ((interest * values["amount"]) /
  (1 - Math.pow((1 + interest), -paymentCount))).toFixed(2);
  return `${result}`
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const newMonthly = document.getElementById("monthly-payment")
  newMonthly.textContent = `$${monthly}`
}
