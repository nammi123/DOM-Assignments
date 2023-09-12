const storedUserInfo = localStorage.getItem("userInfo");
if (storedUserInfo) {
  const userInfo = JSON.parse(storedUserInfo);
  document.getElementById("firstName").textContent = userInfo.firstName;
  document.getElementById("lastName").textContent = userInfo.lastName;
  document.getElementById("country").textContent = userInfo.country;
  document.getElementById("phoneNumber").textContent = userInfo.phoneNumber;
  document.getElementById("state").textContent = userInfo.state;
  document.getElementById("city").textContent = userInfo.city;
  document.getElementById("village").textContent = userInfo.village;
}
function storeUserInfo() {
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  const country = prompt("Enter your country:");
  const phoneNumber = prompt("Enter your phone number:");
  const state = prompt("Enter your state:");
  const city = prompt("Enter your city:");
  const village = prompt("Enter your village:");

  const userInfo = {
    firstName,
    lastName,
    country,
    phoneNumber,
    state,
    city,
    village,
  };

  localStorage.setItem("userInformation", JSON.stringify(userInfo));
  document.getElementById("firstName").textContent = userInfo.firstName;
  document.getElementById("lastName").textContent = userInfo.lastName;
  document.getElementById("country").textContent = userInfo.country;
  document.getElementById("phoneNumber").textContent = userInfo.phoneNumber;
  document.getElementById("state").textContent = userInfo.state;
  document.getElementById("city").textContent = userInfo.city;
  document.getElementById("village").textContent = userInfo.village;
}
storeUserInfo();