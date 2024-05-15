//Delete all the lists created in Step 6 simultaneously
let getCards=require("./problem3")

let {apiToken,apiKey}=require("./utils");
'https://api.trello.com/1/lists/{id}/closed?key=APIKey&token=APIToken'
function deleteAll(listId){
    fetch(`https://api.trello.com/1/lists/${listId}/closed?key=${apiKey}&token=${apiToken}&value=true`, {
  method: 'POST'
})
.then((res)=>{
    res.json()
})
}
getCards("y0W1l19e")
.then((res)=>{
    let data=res.map((ele)=>{
      return  deleteAll(ele.id)
    })
    return Promise.all(data)
})
.then((res)=>{
    console.log("deleted successfully")
})
