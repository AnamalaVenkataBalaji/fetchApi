const{apiKey,apiToken}=require("./utils")
let getAllCards=require("./problem5");
const { promises } = require("fs");


function getCheckItems(checkListID){
    let urlPath=`https://api.trello.com/1/checklists/${checkListID}/checkItems?key=${apiKey}&token=${apiToken}`
  return  fetch(urlPath, {
  method: 'GET'
})
  .then(response => {
    return response.json();
 } );
    
}

function setStateOfCheckItem(cardId,checkItemId){
    let urlPath=`https://api.trello.com/1/cards/${cardId}/checkItem/${checkItemId}?key=${apiKey}&token=${apiToken}&state=complete`
    return fetch(urlPath, {
  method: 'PUT'
})
  .then(response => {
   
    return response.json();
  })

}





let obj={};
getAllCards("")
.then((cardsData)=>{
  cardsData=cardsData.flat();
  let arrayOfPromises=[]
  cardsData.forEach((cardId)=>{
    obj[cardId.id]=cardId.idChecklists;
    cardId.idChecklists.forEach((list)=>{
       arrayOfPromises(getCheckItems(list))
    })
  })
  return Promise.all(arrayOfPromises);
})


.then((getCheckItemData) => {
  getCheckItemData = getCheckItemData.flat();
  console.log(getCheckItemData);
  let promiseArray = getCheckItemData.map((checkItem) => {
    let cardId = Object.keys(obj).find((id) => {
      return obj[id].includes(checkItem.idChecklist);
    });

    return setStateOfCheckItem(cardId, checkItem.id);
  });
  return Promise.all(promiseArray);
})


.then((getCheckItemsData)=>{
    getCheckItemsData=getCheckItemsData.flat();
    let arrayOfPromises=getCheckItemsData.map((checkItem)=>{
    let cardId = Object.keys(obj).find((id)=>{
      return obj[id].includes(checkItem.idChecklist)
    })
    return setStateOfCheckItem(cardId,idChecklist)
       })
       return Promise.all(arrayOfPromises)
})











  .then((res) => {
   res=res.flat();
//    console.log(res)
let arrayOfPromises=[];
res.forEach((ele)=>{
    obj[ele.id]=ele.idChecklists;
    ele.idChecklists.forEach((listId)=>{
        arrayOfPromises.push(getCheckItems(listId))
    })
})
return Promise.all(arrayOfPromises)
  })
  .then((getCheckItemData) => {
    getCheckItemData = getCheckItemData.flat();
    console.log(getCheckItemData);
    let promiseArray = getCheckItemData.map((checkItem) => {
      let cardId = Object.keys(obj).find((id) => {
        return obj[id].includes(checkItem.idChecklist);
      });

      return setStateOfCheckItem(cardId, checkItem.id);
    });
    return Promise.all(promiseArray);
  })

  .then((res)=>{
    console.log(res)
  })
  .catch((error) => {
    console.log(error);
  });

