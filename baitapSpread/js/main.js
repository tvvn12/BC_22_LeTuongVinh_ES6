let content="";
content=document.getElementsByClassName("heading")[0].innerHTML;

let tachContent=[...content];

const tachChuoi=()=>{
    let congBang="";
for(let value of tachContent){
    congBang += `
    <span>${value}</span>
    `
}
document.querySelector(".heading").innerHTML= congBang;
}
tachChuoi();
