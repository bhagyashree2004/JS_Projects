// let h = document.querySelector("h1");
 
// h.addEventListener("click",function(){
//     h.innerHTML="Nikal #*#&*"
//     h.style.color="red"
//     h.style.backgroundColor="turquoise"
// })


var astatus = document.querySelector("#status")
var addFriend = document.querySelector("#add")
var check = 0;


addFriend.addEventListener("click",function(){
    if(check==0){
    astatus.innerHTML = "Friends"
    astatus.style.color= "blue"
    addFriend.innerHTML= "Remove"
    addFriend.style.backgroundColor="#dadada"
    // addFriend.classList.remove("add")    
    // addFriend.classList.add("remove")    
    
    console.log("hui")

     check = 1
    }
    else{
    astatus.innerHTML = "Stranger"
    astatus.style.color= "red"
    addFriend.innerHTML= "Add Friend"
    addFriend.style.backgroundColor="yellowgreen"
    // addFriend.classList.add("add")    
    // addFriend.classList.remove("remove")    
      check = 0
    }
})

// removeFriend.addEventListener("click",function(){
//     astatus.innerHTML = "Stranger";
//     astatus.style.color= "red";
//     addFriend.innerHTML= "Add Friend"
// })
