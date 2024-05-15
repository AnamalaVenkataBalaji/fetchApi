
let {apiToken,apiKey}=require("./utils");


function getAllCards(boardId){
    let urlsPath=`https://api.trello.com/1/lists/${boardId}/cards?key=${apiKey}&token=${apiToken}`

  return  fetch(urlsPath)
    .then((res)=>{
        return res.json();
    })
   
}

function getLists(boardId){
    urlPath=`https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${apiToken}`
    return fetch(urlPath)
    .then((res)=>{
     return res.json()
    })
 }
 
getLists("ejo8PdNn")
.then((res)=>{
    console.log(res)
    return Promise.all(res.map((ele)=>getAllCards(ele.id)))
   
})
.then((res)=>{
    console.log(res)
})
