const searchField = document.getElementById("searchBar");
const submitButton = document.getElementById("submitButton");
console.log(searchField, submitButton);

const searchEmoji = () => {

if(searchField.value !== ""){
submitButton.style.display = "flex"
}else{
submitButton.style.display = "none"

}
console.log(submitButton)


  console.log("function called");
  const searchFieldValue = searchField.value;

  console.log(emojiList);
  const filteredList = emojiList.filter((e) => {
    if (e.aliases.some((ele) => ele.startsWith(searchFieldValue))) {
      return true;
    }
    if (e.tags.some((ele) => ele.startsWith(searchFieldValue))) {
      return true;
    }
  });
  const searchResultContainer = document.getElementById(
    "searchResultContainer"
  );
  searchResultContainer.innerText = "";
  filteredList.map((ele) => {
    console.log(ele);

    const emoji = document.createElement("h1");
    const description = document.createElement("p");
    const category = document.createElement("h3");

    emoji.innerText = ele.emoji;
    description.innerText = ele.description;
    category.innerText = ele.category;

    searchResultContainer.appendChild(emoji);
    searchResultContainer.appendChild(category);
    searchResultContainer.appendChild(description);
  });
};


if(searchField.value == ""){

	submitButton.style.display = "none"
}

submitButton.addEventListener("click", searchEmoji);
searchField.addEventListener("keyup", searchEmoji);

window.onload = () => searchEmoji()