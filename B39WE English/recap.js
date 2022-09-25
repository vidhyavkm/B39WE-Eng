// print all odd numbers in an array

var array = [1,2,3,4,5,6,7,8,9]

//normal or named function
function odd(){
    var result = array.filter(number=>number%2!=0)
    //console.log(odd());
    return result; 
}
console.log(odd());

//anonymous function
var odd = function (){
    var result = array.filter(number=>number%2!=0)
    return result; 
}
console.log(odd());

//IIFE
//syntax:((){})()
(function odd(){
    for(var i=0; i<array.length;i++){
        if(array[i]%2!=0)
console.log(array[i])}
})
();

//arrow function
var odd1 = () => {for(var i=0; i<array.length;i++){
    if(array[i]%2!=0)
console.log(array[i])
}}
odd1();


