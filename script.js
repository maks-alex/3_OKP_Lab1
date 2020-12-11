// function 1
function array (n){
    let arr = new Array();
    for (let i=0; i<n; i++){
        arr[i]=i;
    }
return arr;
}

console.log(array(5));



//function 2
function numbersCheck(a, b, c){
    return (a % b===0 && a % c === 0)
}

//true
console.log(numbersCheck(-12, 2, -6))
//false
console.log(numbersCheck(-12, 2, -5))
//false
console.log(numbersCheck(45, 1, 6))
//true
console.log(numbersCheck(45, 5, 15))
//true
console.log(numbersCheck(4, 1, 4))
//true
console.log(numbersCheck(15, -5, 3))



//function 3
function firstCapital(string) {
    let str = string;
    return str[0].toUpperCase() + str.slice(1);
  }
  console.log(firstCapital('work'))



