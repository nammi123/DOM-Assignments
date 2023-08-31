let tiplabel=document.getElementById("tiplabel")
tiplabel.style.display="none";
let calulate=document.getElementById("calcbtn");
calulate.addEventListener('click',()=>{
let billamount=document.getElementById("Amount").value;
let serviceQuality=document.getElementById("Squality").value;
let numPeople=document.getElementById("totalPeople").value;
document.getElementById("totaltip").value=" RS "+(billamount*serviceQuality)/numPeople+" !";
tiplabel.style.display="inline";
})