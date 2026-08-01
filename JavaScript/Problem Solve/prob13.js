let monitor = {
    color : "black",
    brand : "LG",
    size: "15 inche",
    display : "Amoled",

}

for(let key in monitor){
    console.log(key ,":",monitor[key]);
}

let objKeys = Object.keys(monitor);
console.log(objKeys);

for(let i = 0;i<objKeys.length;i++){
    let key = objKeys[i];
    console.log(key,": ",monitor[key]);
}

for(let key of objKeys){
    console.log(key,": ",monitor[key]);
}