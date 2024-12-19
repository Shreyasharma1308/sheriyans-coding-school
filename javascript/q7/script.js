var btn =document.querySelector("button");
var pg= document.querySelector("#progress");
var h3=document.querySelector("h3");
btn.addEventListener("click",function(){
  var wd=0;
 var int;
 
    int= setInterval(function(){
        if(wd === 100){
            h3.style.opacity= 1;
            clearInterval(int);
        }
        wd++;
        pg.style.width= wd+"%";
    }
    ,50);
 
    
});