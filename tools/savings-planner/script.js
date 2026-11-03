function calculateMonths(goalAmount, currentSavings, monthlySaving) {
  let months = 0;
  let saved = currentSavings;

  while (saved < goalAmount) {
    saved = saved + monthlySaving;
    months = months + 1;
  }

  return months;
}

let planButton = document.getElementById("planButton");
let result = document.getElementById("result");

planButton.addEventListener("click", function () {
  let goalName = document.getElementById("goalName").value;
  let goalAmount = Number(document.getElementById("goalAmount").value);
  let currentSavings = Number(document.getElementById("currentSavings").value);
  let monthlySaving = Number(document.getElementById("monthlySaving").value);

  if (monthlySaving <= 0) {
    result.textContent = "Please enter a monthly saving greater than 0.";
    return;
  }

  if (goalAmount <= 0) {
    result.textContent = "Please enter a goal amount greater than 0.";
    return;
  }

  if (currentSavings < 0) {
    result.textContent = "Already saved can't be a negative number.";
    return;
  }

  if (currentSavings >= goalAmount) {
    result.textContent = "Great news! You already have enough saved.";
    return;
  }

  let months = calculateMonths(goalAmount, currentSavings, monthlySaving);

  let monthWord = "months";
  if (months === 1) {
    monthWord = "month";
  }

  if (goalName === "") {
    goalName = "your goal";
  }

    let comment = "";

  if (months <= 6) {
    comment = " That's really soon, well done!";
  } else if (months <= 12) {
    comment = " You'll get there within a year!";
  } else {
    comment = " It's a long road, but every month counts. Try saving a little more to get there faster.";
  }

  result.textContent = "You'll reach " + goalName + " in " + months + " " + monthWord + "." + comment;
});