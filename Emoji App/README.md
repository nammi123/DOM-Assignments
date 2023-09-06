# Emoji App
In this task, we can search for any emoji by simply search the name.

First, we create a folder that creates emoji.html , emoji.css, and emoji.js and add one file emojilist.js After that we write code in HTML for basic structure and after some styling apply with the help of CSS and add functionality with the help of javScript.

```
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

```

# Hosted Link:-
https://nammi123.github.io/DOM-Assignments/Emoji%20App/emoji.html
# Demo Screenshot
![image](https://github.com/nammi123/DOM-Assignments/assets/96935962/aa29ea2e-420e-47b1-9d7a-13423bc00a1c)
