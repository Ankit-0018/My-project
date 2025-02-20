const input = document.getElementById("add-task")
const addButt = document.getElementById("add")
const diiv = document.getElementById("show-task")



addButt.addEventListener("click" , (e)=>{
    
    if (input.value.trim() === "") return; 

   const newTask =  document.createElement('div')
   newTask.classList.add("task")


   const newP = document.createElement("p")

   
newP.innerText = input.value
newTask.appendChild(newP)


   

   
diiv.appendChild(newTask)
let flag = 0
newTask.addEventListener("click", () => {
if(flag==0){
    
        newP.style.textDecoration = "line-through"
        flag = 1
        diiv.appendChild(newTask);
    
}
else if(flag==1) {
   
        newP.style.textDecoration = "none"
        flag = 0
        diiv.insertBefore(newTask, diiv.firstChild); 
    }


});
    input.value = "";

})

