// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve("Promise Resolve")
//         reject ("Promise Rejected")
//     }, 3000)
// })

// myPromise.then((res) => {
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })/

let apiData = fetch("https://jsonplaceholder.typicode.com/users");
apiData.then((data)=>{
    return data.json()
}).then((result)=>{
    console.log("APi Data Is Here : ",result)
})
