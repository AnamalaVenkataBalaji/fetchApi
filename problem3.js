//Create a function getLists which takes a boardId as argument and returns a promise which resolved with lists data

let {apiToken,apiKey}=require("./utils");
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
})
.catch((error)=>{
    console.log(error)
})

module.exports=getLists;