var ul = document.querySelector('ul');
var ad= document.querySelector("#b1");
var rm = document.querySelector("#b2");
var inp= document.querySelector("input")
var li;
ad.addEventListener("click",function(){
     li =document.createElement('li'); 
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value = "";
});

rm.addEventListener("click",function(){
   ul.removeChild(li);
});