//Create a new board, create 3 lists simultaneously, and a card in each list simultaneously

let {apiToken,apiKey}=require("./utils");
function createBoard(boardName){
 return fetch(`https://api.trello.com/1/boards/?name=${boardName}&key=${apiKey}&token=${apiToken}`, {
  method: 'POST'
})
.then((res)=>{
    return res.json()
})
}


function createLists(listName,boardId){
    return fetch(`https://api.trello.com/1/lists?name=${listName}&idBoard=${boardId}&key=${apiKey}&token=${apiToken}`, {
        method: 'POST'
      })
      .then((res)=>{
        return res.json()
      })
}
function createcard(name,listId){
  return fetch(`https://api.trello.com/1/cards?name=${name}&idList=${listId}&key=${apiKey}&token=${apiToken}`, {
  method: 'POST'
})
.then((res)=>{
    return res.json()
})
}

createBoard("subbu")
.then((res)=>{
    let result=[]
 for(let i=0;i<3;i++){
   result.push(createLists(`file-${i}`,res.id))
 }
 return Promise.all(result)
 
})
.then((res)=>{
   let result=[]
 
    for(let i=0;i<3;i++){
        result.push(createcard(`card-${i}`,res[i].id))
       }

   
   return Promise.all(result)
})
.then((res)=>{
    console.log(res)
})


module.exports={createBoard,createcard,createLists};