
const searchbar=document.getElementById("searchBar");
const searcBtn=document.getElementById("searchBtn");
const getAllUsers = document.getElementById("getAllUsers");
const cardContainer=document.getElementById("cardContainer");

searcBtn.addEventListener("click",(e)=>{
   e.preventDefault();
   const searchVal=searchbar.value
   getUser(searchVal);
});

getAllUsers.addEventListener("click", (e) => {
   e.preventDefault();
   cardContainer.innerHTML = "";
   getUser();
 });
 
function getUser(searchVal){
   let url;
   if(searchVal===undefined){
       url=`https://api.github.com/users`;
   }else{
      url=`https://api.github.com/users/${searchVal}`;
   }
   
    const promise=fetch(url);
   promise.then((response)=>{
     return response.json();
   }).then((data)=>{
      let result=data
      console.log(cardContainer);
      console.log(result);
      if(searchVal===undefined){
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
      }else{
            cardContainer.innerHTML=""
            console.log(result);
            if(result.message==="Not Found"){
               const heading=document.createElement("h2");
               heading.innerText="user not found";
               cardContainer.appendChild(heading)
            }else{
               const card=document.createElement("div")
               const heading=document.createElement("h2")
               const paragraph=document.createElement("p")
               const img=document.createElement("img")
               const link=document.createElement("a")
               heading.innerText=result.login
               img.src=result.avatar_url
               link.href=result.html_url
               link.innerHTML="Github link"
               card.appendChild(img)
               card.appendChild(heading)
               card.appendChild(link)
               cardContainer.appendChild(card)
            } 
      }

   })
   
}
getUser();