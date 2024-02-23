var main= document.querySelector("#main");
var crsr= document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px"; //left tabhi work kargea jab cursor ki position absolute hogi 
    crsr.style.top = dets.y + "px"; //top bhi tabhi work kargea jab cursor ki position absolute hogi 
})
