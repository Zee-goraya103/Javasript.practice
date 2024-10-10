// document.getElementById("practice").innerHTML = "My Name is Zulqarnain haider <br> I am a styudent of that University";
let name = 1


if(true){
    var name2 = "saif"
    console.log("block scope",name)
}
console.log(name2)
let name_saif;
const scope = ()=>{
    name_saif = "Ur Rehman"
    console.log("function scope",name)

}
console.log("Name_saif",name_saif)
scope()
console.log("global scope",name)
