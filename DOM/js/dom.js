

//dom analyzer
console.log(document.URL);

// document.getElementById('title').innerHTML= 'HER PROWER PROJECT';
// console.dir(document.title);

// console.log(document.body);

// console.log(typeof document
// );

//DOM TRAVERSING
//get element by id-#
//get element by class-.
//get element by tag-tag
//get element by queryselector 

//get element By Id
// let head=document.getElementById('h1');
// head.innerHTML="TO DO LIST"
// head.style.color="black";
// head.style.fontSize="60px";
// console.log(head.textContent);
// console.log(head.innerText);
// console.log(head.innerHTML);
// console.log(innercontent);

// let title=document.querySelector('#h1');
// title.innerHTML="To do list";

// let elementCreate=document.createElement('div');
// console.log(elementCreate);
// elementCreate.className='element';
// elementCreate.setAttribute('id','element1')

//*
// let con=document.querySelector('#section');
// let h1elementCreate=con.querySelector('#h1');
// con.insertBefore(elementCreate,h1elementCreate)
// elementCreate.innerHTML="Nasima Akter";
// elementCreate.style.color='red';
// elementCreate.style.
// textAlign='center';
// elementCreate.style.
// padding='20px';
// elementCreate.style.
// fontSize='40px';


// select elements and assign them to variables
let newTask=document.querySelector('#new-task');
let form=document.querySelector('form');
let toUl=document.querySelector('#items');
let completUl=document.querySelector('.complete-list ul');


// new task create 

let createTask=function(task){
 let listItem=document.createElement('li');
 let checkBox=document.createElement('input');
 let label=document.createElement('label');
 checkBox.type='checkbox';
 label.innerText=task;

 listItem.appendChild(checkbox);
 listItem.appendChild(label);

 return listItem;
}


// new task add in list

let addTask=function(event){
    event.preventDefault();
    let listItem=createTask(newTask.value);
    toUl.appendChild(listItem);
    newTask.value='';
    // bind the new list item to the incomple list
    bindInCompleteItem(listItem,completeTask);
}




