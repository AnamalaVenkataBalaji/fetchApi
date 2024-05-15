//Create a function createBoard which takes the boardName as argument and returns a promise which resolves with newly created board data

let {apiToken,apiKey}=require("./utils");

function createBoard(boardName){
  let urlPath=`https://api.trello.com/1/boards/?name=${boardName}&key=${apiKey}&token=${apiToken}`
  return fetch(urlPath,{
    method:"POST"
})
  .then((res)=>{
    return res.json()
  })
  
}
createBoard("balaji")
.then((jsonData)=>{
    console.log(jsonData)
  })
  .catch((error)=>{
    console.log(error)
  })

  module.exports=createBoard;