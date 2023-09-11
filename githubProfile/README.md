# Github Profile

In this task we are create a github finder with the help of github API. Enter any username it shows the profile pic name bio location followers and 
following. If username not found its shows the user not found.
first of we are create a html file for basic structure after that apply styling with the help of css and for functionality we are create a js file.
In js file we are api concepts and apply eventlistners.

```
let getuser = async () => {
  let keyword = document.querySelector(".keyword");
  if (keyword.value.length <= 0) {
    userCardConatiner.innerHTML = loader.innerHTML;
  } else {
    loader.innerHTML = `<i class="fas fa-spin fa-spinner"></i>`;
    let response = await fetch(`https://api.github.com/users/${keyword.value}`);
    let result = await response.json();
    let data = await result;
    console.log(data);
    showuser(data);
    loader.innerHTML = 'Please enter your github username.'
  }
};
```
For dark and light mode 
```
dark.addEventListener("click", () => {
    logo.style.color = "white";
    document.body.style.backgroundColor = "rgb(50, 50, 50)";
})

light.addEventListener("click", () => {
    logo.style.color = "black";
    document.body.style.backgroundColor = "white";
})
```
# Hosted Link:
https://nammi123.github.io/DOM-Assignments/githubProfile/index.html


# Screenshot:
![Screenshot (95)](https://github.com/nammi123/DOM-Assignments/assets/96935962/fcce9a0b-cb58-4e8d-b2da-743f9a5ce55e)
