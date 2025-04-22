let counter = 1; 

document.addEventListener('keydown', function(event){
    if(event.key == "Enter" && document.getElementById("inputBar").value != ""){
        //create li element 
        let item = document.createElement("li"); 

        //creating the checkbox and label 
        let button = document.createElement("input"); 
        button.type = "checkbox"; 
        button.id = "item" + counter;
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

    }
}); 
