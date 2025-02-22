const form = document.querySelector("form");
const input = document.getElementById("user-message");
const submitButt = document.getElementById("submit-butt");

const API_KEY = "AIzaSyBQZi2dAjOca2fiCNrOkuC7J1muTF6Hn9g";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`






form.addEventListener("submit" , (e) => {

    let userMessage = input.value.trim();
    e.preventDefault();
    if(userMessage == "") return;
    
    

addMessage(userMessage , "user")

input.value = ""

setTimeout(()=> {
   const res =  generateResponse(userMessage)
   
} , 600);


});






function addMessage(text , sender){

    const messageBox = document.createElement("div");
    messageBox.classList.add(sender == "user" ? "message-box-user" : "message-box-ai");
    messageBox.innerHTML = sender == "user" ? ` 
     <p>${text}
        </p> <i class="fa-solid fa-circle-user"></i>
       ` : `  <i class="fa-solid fa-robot"></i>
        <p>${text}
        </p>`

        document.querySelector(".message-box").appendChild(messageBox)

    
     
         
}

 async function generateResponse(userMessage){

    try{

        const response = await fetch(API_URL , {
            method : 'POST',
            headers : {
                "Content-Type" : "application/JSON",
            },
            body : JSON.stringify( {"contents" : [{parts : [{text : userMessage}]}]})
        })
            const data = await response.json()
          const finalResponse = data.candidates[0].content.parts[0].text; 
        
 
    addMessage(finalResponse , "ai")
    
    }

  catch (Error){
    console.log(Error)
  }

}


