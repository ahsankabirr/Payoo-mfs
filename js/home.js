document.getElementById("add-money").addEventListener("click", (event) => {
  event.preventDefault();
  const balanceAmount = document.getElementById("amount-money").innerText;
  const addAmount = document.getElementById("amount").value;

  const pinCheck = document.getElementById("pin").value;
  if (pinCheck === "1234") {
    const balanceNumber = parseFloat(balanceAmount);
    const addMoneyNumber = parseFloat(addAmount);

    const newBalance = addMoneyNumber + balanceNumber;
    document.getElementById("amount-money").innerText = newBalance;

    console.log(newBalance);
  } else {
    console.log("Wrong phone number of pin");
  }
});
