console.log("Hello Array")
let a=20;
console.log(("the value is :",a+1))
console.log(`the value of a is :${a}`)

const obj={
    name:"xyz"
}

console.log(obj.name)
obj.name="y"
console.log(obj.name)


let str="Welcome";
console.log(str[1])
str[0]="D"
console.log(str)

console.log(str.length) //length is a property is count from 1


console.log(str.toLowerCase())
console.log(str.toUpperCase())


console.log(str.trim())

console.log(str.charAt(0))

console.log(str.concat(" Qlith").concat(" Innovation")) //concat for merge the word

const newString=str.replace("W","O");
console.log(newString)


console.log(str.slice(1,6));
console.log(str.slice(-2));
console.log(str.slice(4));



// const userName=promtp("Enter your name");
// console.log("".concat("@").concat(userName).concat(userName.length))



// Array 

let starr=["bablu","puja"];
console.log(starr[0])

let numArr=[1,2,3,4,6,7];
let sum=0;
for(let e of numArr){
    sum=sum+e;
}

console.log(sum/(numArr.length))


const addEle=numArr.push(8);
console.log(addEle)

let arr2=[1,2,3,4,5];
let arr3=[4,7,4,0]
arr2.push(6,7,"khgjy",true)
arr2.pop()
console.log(arr2)

console.log(arr2.toString())

console.log(arr2.concat(arr3))

arr2.unshift(0);
console.log(arr2)
arr2.shift()
console.log(arr2)

console.log(arr2.slice(0,3))
console.log(arr2.slice(-2))


arr2.pop()
console.log(arr2)
arr2.splice(1,2,10)
console.log(arr2)

arr2.splice(4,1)
console.log(arr2)

console.log(arr2.includes(10));


let comArr=["bloomber","microsoft","ubar","ola"]
comArr.shift();
console.log(comArr)

comArr.splice(1,1,"ola")
console.log(comArr)

comArr.push(Amazon);
console.log(comArr)