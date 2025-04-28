
if(localStorage.getItem("items") != null){
    console.log(localStorage.getItem("items")); 
    let list = document.getElementById("list")
    list.innerHTML = localStorage.getItem("items"); 
}else{
    localStorage.setItem("items", ""); 
}


let counter; 

if(localStorage.getItem("counter") != null){
    counter = localStorage.getItem("counter"); 
    console.log("counter: " + counter); 

     //add back button functionality 
     //list = document.querySelectorAll("li")
    for(let x = 0 ; x < counter ; x++){
        console.log(x);
        let but = document.getElementById("item"+x); 
        if(but == null){
            console.log("button not found");
        }else{
            but.onclick = function() {
                updateItemCheck(this, (this.id));
            };
        }
    }
 
}
else{
    counter = 0; 
    localStorage.setItem("counter", 0);
}

document.addEventListener('keydown', function(event){
    if(event.key == "Enter" && document.getElementById("inputBar").value != ""){
        console.log("counter value: ", counter)
        //create li element 
        let item = document.createElement("li"); 

        //creating the checkbox and label 
        let button = document.createElement("input"); 
        button.type = "checkbox"; 
        button.id = "item" + counter;
        //need an event handler still because otherwise localStorage will not save updated info on whats been checked off 
        button.onclick = function() {
            updateItemCheck(this, (this.id));
        };

        let label = document.createElement("label")
        label.textContent = document.getElementById("inputBar").value; 
        label.htmlFor = "item" + counter; 

        //appending checkbox and label to li item 
        item.appendChild(button); 
        item.appendChild(label); 
        
        //add li item to unordered list 
        let list = document.getElementById("list"); 
        list.appendChild(item); 

        //reset the input field 
        document.getElementById("inputBar").value = ""; 
        //update counter for next element 
        counter++; 

        //update local storage 
        localStorage.setItem("items", document.getElementById("list").innerHTML); 
        localStorage.setItem("counter", counter);

        

    }
}); 

function updateItemCheck(button, id){
    console.log("In here"); 
    console.log("id value: ", id); 
    let label = document.querySelector(`label[for="${id}"]`);
    if(label == null){
        console.log("is nulll"); 
    }
    console.log(label); 
    if(button.checked == true){
        label.style.textDecoration = "line-through";
    }else{
        label.style.textDecoration = "none";
    }
    
    localStorage.setItem("items", document.getElementById("list").innerHTML)
}

function clearItems(){
    localStorage.setItem("items", ""); 
    localStorage.setItem("counter", 0);
    location.reload(); 
}