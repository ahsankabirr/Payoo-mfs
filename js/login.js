document.getElementById("button-login").addEventListener("click", (event) => {
  const phoneNumber = document.getElementById("number-Text").value;
  const pinNumber = document.getElementById("Pin-Number").value;
  event.preventDefault();
  console.log(phoneNumber, pinNumber);

  if (phoneNumber === "0130457777" && pinNumber === "1234") {
    window.location.href = "/home.html";

    console.log("Your logged in");
  } else {
    console.log("Wrong phone number of pin");
  }
});
