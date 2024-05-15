let getLists=require("./problem3")
let deleteAll=require("./problem71")


getLists("sUkjGBoW")
.then((list)=>{
    let data=list.map(list=>list.id)
    let listIds=data.reduce((previouspromise,cv)=>{
      return previouspromise.then((res)=>{
       return deleteAll(cv)
      })
    },Promise.resolve())
    return listIds
})
.then((res)=>{
    console.log(res)
})