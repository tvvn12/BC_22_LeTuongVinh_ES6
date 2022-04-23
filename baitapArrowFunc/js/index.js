

const colorList =["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

const renderButton=()=>{
let content= "";


for (let index in colorList) {
    content += `
    <button type="button" onclick="change('${colorList[index]}')"  class="color-button ${colorList[index]}"></button>
    `;
    
}
document.getElementById("colorContainer").innerHTML =content;

document.querySelector(`.${colorList[0]}`).classList.add("active");
console.log(colorList[0]);
};
renderButton();


const change=(color)=>{
    const removeActive = document.getElementsByClassName("color-button");
    for (let value of removeActive){
        value.classList.remove("active");
    }
    document.querySelector(`.${color}`).classList.add("active");
    document.getElementById("house").className =`house ${color}`;
    // document.getElementsByClassName("house-roof").className =`house ${color}`;

}

