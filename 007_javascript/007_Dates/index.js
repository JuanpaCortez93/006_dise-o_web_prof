// const date = new Date();
// console.log(date);
// console.log(date.getHours());
// console.log(date.getMinutes());

setInterval(()=> {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
},1000);