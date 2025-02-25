const attachButt = document.getElementById("expand")
let flag = 0;
attachButt.addEventListener("click" , (e)=> {
    
    if(flag==0){
        const newDiv = document.createElement("div");
        newDiv.classList.add("task-container");
        document.querySelector(".container").appendChild(newDiv)
        flag = 1;
    }
    else {
        document.querySelector(".task-container").remove()
        flag = 0;
    }
  
})