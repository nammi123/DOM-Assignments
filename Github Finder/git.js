
const searchbar=document.getElementById("searchBar");
console.log(searchbar);

const cardContainer=document.getElementById("cardContainer");


function getUser(){
    const url="https://api.github.com/users";
    const promise=fetch(url);
   promise.then((response)=>{
     return response.json();
   }).then((data)=>{
      let result=data
      console.log(cardContainer);
      console.log(result);
     result.map((ele)=>{
        const card=document.createElement("div")
        const heading=document.createElement("h2")
        const paragraph=document.createElement("p")
        const img=document.createElement("img")
        const link=document.createElement("a")
        heading.innerText=ele.login
        img.src=ele.avatar_url
        link.href=ele.html_url
        link.innerHTML="Github link"
        card.appendChild(img)
        card.appendChild(heading)
        card.appendChild(link)
        cardContainer.appendChild(card)

     })

   })
   
}

getUser();