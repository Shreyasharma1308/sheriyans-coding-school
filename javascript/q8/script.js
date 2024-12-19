var input=document.querySelector("input");

var data=[
    {
      name: "harsh" ,src: "https://images.unsplash.com/photo-1733860474140-1734a8361e82?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
        name: "harshita" ,src: "https://images.unsplash.com/photo-1733364468645-4bff6f722692?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
      },
      {
        name: "harshi" ,src: "https://images.unsplash.com/photo-1733348701960-1cbebe1a3711?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" 
      },
      {
        name: "harshu" ,src: "https://images.unsplash.com/photo-1733371001616-0341f62c56c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" 
      },
      {
        name: "harshil" ,src: "https://images.unsplash.com/photo-1732253081670-f0548833617b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" 
      },
      {
        name: "hari" ,src: "https://plus.unsplash.com/premium_photo-1727895542760-7afe342a93c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" 
      }
]
var pers="";
data.forEach(function(elem){
 pers +=` <div class="person">
                <div class="img">
                    <img src="${elem.src}">
                </div>
                <h4>${elem.name}</h4>

            </div>
`;
})
document.querySelector(".people").innerHTML = pers;
input.addEventListener("input",function(){
    var matching= data.filter(function(el){
        return el.name.startsWith(input.value);
    })
    var newpers="";
matching.forEach(function(elem){
 newpers +=` <div class="person">
                <div class="img">
                    <img src="${elem.src}">
                </div>
                <h4>${elem.name}</h4>

            </div>
`;
})
document.querySelector(".people").innerHTML = newpers;
})