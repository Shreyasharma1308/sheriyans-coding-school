var str = document.querySelector("#str");
var stp = document.querySelector("#stp");
var h1 = document.querySelector("h1");
 
var int;
str.addEventListener("click",function(){
    var count=0;
     int =setInterval(function(){
        h1.textContent=count;
        count++;
        
        },1000);
});
stp.addEventListener("click",function(){
    clearInterval(int);    
});

