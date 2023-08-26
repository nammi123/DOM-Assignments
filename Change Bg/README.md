# Change Bg

## Html file
we are create html file and link css and add script file. In html file we are using button tag.

```
<button>Change Background</button>
```

## CSS file

Now creating css file for styling and animations  firrstly some styling for body tag like that display flex
justify-content center, bg color and height.Some styling for our button tag and animation we are using keyframes.

## JS file

First we are get our button tag using 
```
const btn=document.getElementsByTagName("button")[0];
```
for click event we are adding addEventListener("click", function())
then we are used Math.random() for filtering random colors and add our class
change-bg-animation and thensetTimeout function to remove the change-background-animation class from the body element after 500 milliseconds.

# hosted link:-
https://nammi123.github.io/DOM-Assignments/Change%20Bg/index.html
