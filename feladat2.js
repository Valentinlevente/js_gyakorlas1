let array = [];
for(let i = 0; i < 20; i++){
    let macska = {
        name: "cirmos" + i,
        age: Math.floor(Math.random()*8) +2
    };
    array.push(macska);
}

let c = 0;
array.forEach(element => {
    if(element.age == 2){
        console.log(array[c])
    }
    c++
});