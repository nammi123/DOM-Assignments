# image Search app

We will create an image search app that lets you search for any desired image. You can enter your search query and receive results accompanied by a description. The responsive app displays images in a single column on smaller ones. Using the Unsplash API, the app fetches up to 1000 unique and non-repetitive images. The modern CSS design ensures a fast and responsive user experience, making it enjoyable to search for cats, dogs, or any image.


First of we create a HTML file create a div for all content, and then use the form tag Inside we have an input tag and a button for the search 
After that one div for image results.After styling for all that.
In the Js file we access all elements with the help of the class now we are linking our API 

```
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

```


# Hosted Link
https://nammi123.github.io/DOM-Assignments/imageSearch/img.html

# Screenshot
![Screenshot (93)](https://github.com/nammi123/DOM-Assignments/assets/96935962/63046b8f-ebca-4d12-ad11-ab4476199a78)




