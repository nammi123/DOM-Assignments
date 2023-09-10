const loginBtnClickHandler = async () => {
    //extract the data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
  
    const bodyObject = {
      email,
      password,
      role
    };
  
    //api calling using fetch
  
    const configuration = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyObject)
    };
  
    let data = await fetch(
      "https://geek-store.onrender.com/user/login",
      configuration
    );
  
    data = await data.json();
  
    alert(data.message);
  
    //store the token in local-storage
  
    if (data.token) {
      //use local storage
      localStorage.setItem("token", data.token);
      const redirectURL = `https://${window.location.hostname}/src/index.html`;
      window.location.href = redirectURL;
    }
  };
  
  //add click to login-btn
  document
    .getElementById("login-btn")
    .addEventListener("click", loginBtnClickHandler);
  