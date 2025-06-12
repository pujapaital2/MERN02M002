console.log("Welcomw")

//Variable Declaration

//let a=1
//let A=2
//console.log(a)
//console.log(A)


//let_="Qlith";
//console.log(_)


//let $="Qlith Innovation";
//console.log($)

//let $name="xyz";
//console.log($name)


//let _name="y";
//console.log(_name);


//let nameOfStudent="Puja";
//console.log(nameOfStudent)


//let a=20;//number
//console.log(a)
//console.log(typeof a)


//let name="Qlith";//strig
//console.log(name ,"type is" ,typeof name)


//let isPass=true;//bulian
console.log(isPass)
console.log(typeof isPass)


let empty=undefined;//undifine
console.log(empty)
console.log(typeof empty)


let nullValue=null;//object
console.log(nullValue)
console.log(typeof nullValue)


let b;
console.log(b);


let C=30;//number
console.log(c);
console.log(typeof c)


let c=30;//string
console.log(c);
console.log(typeof typeof c) //


let d=30.5;
console.log(typeof d)


//Global Declaration of the variable
var fullName="Qlith Innovation";
console.log(fullName)

{
    console.log(fullName)
}


function getName(){
    console.log(fullName)
}

getName()

//normal block
//This is my block level declaration of variable
{
    var a=40;
    console.log("block level declaration of variable" ,a)
}

console.log("local access:" ,a) 

function getA(){
    console.log("function level declaration" ,a)

}

getA();

function variableDeclare(){
    var r=50;
    console.log(r)
}


variableDeclare()
console.log(r)


//This is the let variable declaration

//global variable

let name="Innovation";
console.log(name)

{
    console.log(name)
}

function getName(){
    console.log(name)
}

//block level declaration
{
    let a=30;
    console.log(a)
}

console.log("local access :" ,a)


//function level declaration
function getA(){
    console.log("function level declaration",a)
}


getA()
