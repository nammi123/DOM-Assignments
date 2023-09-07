const hour=document.querySelector(".hours");
const minute=document.querySelector(".minutes");
const second=document.querySelector(".seconds");
const am=document.querySelector(".amPm");


function updateTime(){

    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let amPm="AM";

    if(h>12){
        h=h-12;
        amPm="PM";
    }

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;

    hour.innerText=h;
    minute.innerText=m;
    second.innerText=s;
    am.innerText=amPm;

    setTimeout( ()=>{
        updateTime();
    },1000);
}
updateTime();