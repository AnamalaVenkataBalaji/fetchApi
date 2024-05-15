let {apiToken,apiKey}=require("./utils");


function getBoard(boardId){
    let urlPath=`https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`
    fetch(urlPath)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        console.log(error)
    })
}
getBoard("ejo8PdNn")