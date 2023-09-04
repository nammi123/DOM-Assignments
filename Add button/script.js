const Button = document.getElementById('addButton');
const text = document.getElementById('text');
const paragraph = document.getElementById('paragraph');

Button.addEventListener('click', () => {
        const newText = text.value;
        const newParagraph = document.createElement('p');
        newParagraph.textContent = newText;
        paragraph.appendChild(newParagraph);
        text.value = '';
});