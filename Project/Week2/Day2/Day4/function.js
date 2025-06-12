function print(){
    console.log("this is my function")
}

// this is function invocation / calling 
 print() 
// console.log(print) 


// exression function
let printQlith=function(){
    console.log("this is my expression function")
}
printQlith()
// console.log(printQlith) 


// function with parameter 
let add=function(a,b){
    return a+b;
}
let sum=add(10,20);
console.log(sum)
// console.log(add)


let sub=()=>{
    console.log("this is my arrow function")
}
sub()
// console.log(sub)



// higher order function 
function hof(a,b,task){
    return task(a,b)
}
let addNum=hof(20,10,(x,y)=>{
    return x+y;
})
console.log(addNum)



// let newString=prompt("Enter some string :");
// function checkVowel(str){
    // let newStr=str.toLowerCase();
    // let count=0;
    // for(let e of newStr){
        // if(e === "a" || e === "e" || e === "i" || e === "o" || e === "u"){
            // count++;
    // }
// }
// return count;
// }
// console.log("No of vowels is :",checkVowel(newString))


let arr=[1,2,3,4,5,6,7,8]
arr.forEach((v,idx)=>{
    console.log('In idex ${idx} value i :${v} arr ${a}');
})


let strArr=["pagal","bakadi","dasi","choro","sahid","sabji"]
let countStartWithS=0;
strArr.forEach((v)=>{
    if(v.startsWith("s")){
        countStartWithS++;
    }
})
console.log("ans is :",countStartWithS)


// this is map function 
let NumArr=[1,2,3,4,5];
let modifiedArr=NumArr.map((v)=>{
    return v+1;
})
console.log(modifiedArr)


// filte method 
let filterData=NumArr.filter((v)=>{
    if(v%2===0){
        return v;
    }
})
console.log(filterData)


// thisn is reduce method 
let sumOfNumber=NumArr.reduce((accu,curr)=>{
    return accu+curr;
},0)
 console.log("sum is :",sumOfNumber)

// let sumNu=0
// for(let e of nummArr){
    // sumNu+=e;
// }
// console.log(sumNu)


let markOfStudent=[20,30,60,100,90,10,0,17];
let afterFilter=markOfStudent.filter((e)=>{
    return e>=50
})
console.log(markOfStudent)

// question2
let n=prompt("Enetr a number")
let from1ToN=[];
for(let i=1;i<=n;i++){
    from1ToN.push(i);
}

console.log(from1ToN)
let sumFrom1ToN=from1ToN.reduce((accu,curr)=>{
    return accu+curr;
})

let multFrom1ToN=from1ToN.reduce((accu,curr)=>{
    return accu+curr;
})
console.log("Summation is :",sumFrom1ToN);
console.log("Multiplication is:",multFrom1ToN)