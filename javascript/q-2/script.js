var img1 = document.querySelector("#im1");
var img2 = document.querySelector("#im2");
 
document.querySelector("button").addEventListener("click",function(){

    var src1 = img1.src;
    var src2 = img2.src;

    img1.src = src2;
    img2.src = src1;
});