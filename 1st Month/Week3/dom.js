console.log("Today we going to study dom manipulation")
// Window.document.write("Qlith")
// console.error("This is error")

let heading1=document.getElementById("heading1");
heading1.innerText="Bye Bye"
console.log(heading1)

let div=document.getElementByClassName("box");
console.log(div)

let secondDiv=document.getElementsByClassName("box")[1];
console.log(secondDiv)
let h2=secondDiv.children;
// console.log(h2[0])
console.log(h2Coll[1])
h2Coll[1].innerHTML="<i>this is italic</i>"
console.log(h2Coll[1])

let para=document.getElementsByTagName("p")
console.log(para)

let h1=document.querySelector("#heading1");
console.log(h1)


