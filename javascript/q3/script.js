var form = document.querySelector("form");
var inp = document.querySelectorAll("input[type='text']");
var h4 =document.querySelector("h4");



form.addEventListener("submit",function(ev){
  ev.preventDefault();
for(var i=0; i<inp.length; i++){
   if(inp[i].value.trim() === '')
    {h4.textContent="error some feilds are left empty";
    h4.style.color= "red";
    break;}
}

});