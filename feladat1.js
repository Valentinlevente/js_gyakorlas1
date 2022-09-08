let array = [];
for(let i = 0; i<10; i++){
    let random = Math.floor(Math.random()*99)+1;
    array.push(random);
}

array = array.sort();

console.log(array);
