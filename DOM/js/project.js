// select elements & assign them to variables
let newTask = document.querySelector('#new-task'); 
let form = document.querySelector('form'); 
let todoUl = document.querySelector('#items'); 
let completeUl = document.querySelector('.complete-list ul'); 


// নতুন টাস্ক তৈরি করার ফাংশন
let createTask = function(task) {
    let listItem = document.createElement('li'); 
    let checkBox = document.createElement('input'); 
    let label = document.createElement('label');

    label.innerText = task; 
    checkBox.type = 'checkbox'; 

    listItem.appendChild(checkBox); 
    listItem.appendChild(label);

    return listItem; 
}

// নতুন টাস্ক লিস্টে যোগ করা
let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value); 
    todoUl.appendChild(listItem);
    newTask.value = ""; 
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask); 
}

//টাস্ক সম্পূর্ণ হলে প্রক্রিয়া
let completeTask = function() {
    let listItem = this.parentNode; 
    let deleteBtn = document.createElement('button'); 
    deleteBtn.innerText = 'Delete'; 
    deleteBtn.className = 'delete'; 
    listItem.appendChild(deleteBtn); 

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove(); 
    completeUl.appendChild(listItem); 
    bindCompleteItems(listItem, deleteTask);
}
// টাস্ক মুছে ফেলা
let deleteTask = function() {
    let listItem = this.parentNode; 
    let ul = listItem.parentNode; 
    ul.removeChild(listItem); 
}

// ইভেন্ট লিসেনার সেট করা
let bindInCompleteItems = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick; 
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

// delete privous task

// delete incompletItems
for(let i=0; i< todoUl.children.length; i++ ) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}   
// delete completItems
for(let i=0; i< completeUl.children.length; i++ ) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}
//  ফর্ম সাবমিট হ্যান্ডলিং
form.addEventListener('submit', addTask); 


 