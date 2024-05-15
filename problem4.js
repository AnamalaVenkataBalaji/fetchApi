// Create a function getCards which takes a listId as argument and returns a promise which resolves with cards data


let {apiToken,apiKey}=require("./utils");
function getCards(listId){
  let urlPath=`https://api.trello.com/1/lists/${listId}/cards?key=${apiKey}&token=${apiToken}`
  return fetch(urlPath)
  .then((res)=>{
    return res.json();
  })
}
getCards("662f946aee084026e04190fc")
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})

module.exports=getCards