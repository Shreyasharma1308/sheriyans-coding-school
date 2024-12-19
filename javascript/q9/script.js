var textarea =document.querySelector("textarea");
var h3 =document.querySelector("h3");
var counter=document.querySelector("#counter");
textarea.addEventListener("input",function(){
    var c= textarea.value.length;
    counter.textContent=c;
})
