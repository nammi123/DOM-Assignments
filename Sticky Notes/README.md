# Sticky Notes

This script is for a web application that creates and manages "sticky notes" using JavaScript and Local Storage. The script starts by fetching a container element and a button element from the HTML page. Then, it defines several functions to interact with the sticky notes:

getAppStorage(): retrieves the sticky notes from Local Storage and parses them as a JSON array
createTextElement(): creates a new sticky note with the given id and content, and adds event listeners for when the note is changed or double-clicked
addSticky(): creates a new sticky note object and adds it to the container element and Local Storage
saveNotes(): saves the given notes array to Local Storage
updateNote(): updates the content of the sticky note with the given id in Local Storage
deleteNotes(): removes the sticky note with the given id from Local Storage and the container element.

```
const color = document.querySelector('.get-color');
const notesList = document.querySelector('.notes-list');

document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        addNewNote();
    }
})
```

# Hosted link:-
https://nammi123.github.io/DOM-Assignments/Sticky%20Notes/notes.html

# Screenshot :-
![Screenshot (83)](https://github.com/nammi123/DOM-Assignments/assets/96935962/74564db0-6d4c-450c-831e-eaeb29bac7ac)
