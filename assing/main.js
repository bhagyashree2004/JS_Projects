const sayDate = function(str){
   console.log(str,Date.now());
}

let intervalId;

document.querySelector("#start").addEventListener("click",function(){
    intervalId = setInterval(sayDate,1000,"Hello");

})

document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(intervalId)

})


// Assignment on Events

//Note: Check this project outpute in console (...inspect karun)