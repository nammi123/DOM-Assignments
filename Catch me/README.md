# Catch me 
In this task we are creating a button that catches me and if hover this button then moves top left right bottom automatically generating the value the 
the help of Math.random() and Math.floor() these two are inbuilt method of array.

```

button.addEventListener("mouseover",()=>{
    const top=Math.floor(Math.random()*500)
    const left=Math.floor(Math.random()*1000)
   
    button.style.left=left+"px"
    button.style.top=top+"px"
    
})
```

# Hosted link:-
https://nammi123.github.io/DOM-Assignments/Catch%20me/catch.html

# Demo Screenshot:-
![image](https://github.com/nammi123/DOM-Assignments/assets/96935962/4cfb6baa-7227-4549-ba1b-07619fe087bd)
