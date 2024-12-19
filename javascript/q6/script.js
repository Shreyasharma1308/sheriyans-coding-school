// var home = document.querySelector("#home");
// var about = document.querySelector("#about");
// var contact = document.querySelector("#contact");
// var hometext = document.querySelector("#hometext");
// var abouttext = document.querySelector("#abouttext");
// var contacttext = document.querySelector("#contacttext");

var divs = document.querySelectorAll(".tab");
var texts = document.querySelectorAll("h3");

texts[0].style.display = "block";
texts[0].style.width = "50%";
divs.forEach(function ( div ,index) {
    div.addEventListener("click",function(){
        sabsaaf();
        texts[index].style.display = "block";
        texts[index].style.width= "50%";
    });
});

function sabsaaf(){
    texts.forEach( function(text){
        text.style.display ="none";
    });
};

// home.addEventListener("click",function(){
//     hometext.style.display = "block";
// hometext.style.width = "50%";
// abouttext.style.display = "none";
// contacttext.style.display ="none";
// });


// about.addEventListener("click",function(){
//     hometext.style.display = "none";
// abouttext.style.width = "50%";
// abouttext.style.display = "block";

// contacttext.style.display ="none";
// });

// contact.addEventListener("click",function(){
//     hometext.style.display = "none";
// contacttext.style.width = "50%";
// abouttext.style.display = "none";
// contacttext.style.display ="block";
// });