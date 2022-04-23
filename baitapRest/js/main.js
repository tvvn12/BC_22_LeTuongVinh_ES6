function tinhTB(...diemChia){
    let tongDiem=0;
    let diemTungBinh =0;
   for (let value of diemChia){
        tongDiem += parseFloat(value);
   }
   return diemTungBinh = tongDiem/diemChia.length;
}


document.getElementById("btnKhoi1").addEventListener("click",()=>{
    document.getElementById("tbKhoi1").innerHTML = tinhTB(
        document.getElementById("inpToan").value,
        document.getElementById("inpLy").value,
        document.getElementById("inpHoa").value,
    );
})

document.getElementById("btnKhoi2").addEventListener("click",()=>{
    document.getElementById("tbKhoi2").innerHTML = tinhTB(
        document.getElementById("inpVan").value,

        document.getElementById("inpSu").value,
        document.getElementById("inpDia").value,
        document.getElementById("inpEnglish").value,
    );
})



