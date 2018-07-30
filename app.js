const UL = document.querySelector('.container ul');
//#1 event bubbling
//since buttons were used so have to click double
UL.addEventListener('click',function(e){
    const ul = e.target.parentNode.parentNode.parentNode;
    const li = e.target.parentNode.parentNode;
    //console.log(ul);
    //console.log(e.target.className);
    if(e.target.className === 'btn'){  //edit1
        ul.removeChild(li);
    } 

});

//#2 adding
const addF = document.forms['addingForm']; //its not a function so square brackets is used
const addbtn = addF.querySelector('#btnid');

//console.log(addbtn);
addF.addEventListener('submit',function(e){
    e.preventDefault(); //to prevent from refreshing
    //console.log(e.target);
    //get values
    let enteredVal = e.target.querySelector('span input').value; //grabs the entered value 
    console.log(enteredVal);

    //create elements
    const li = document.createElement('li');
    const spanName = document.createElement('span');
    const spanButton = document.createElement('span');
    const button = document.createElement('button');

    //adding styles and classes
    li.classList.add('list');
    spanName.classList.add('name');
    spanButton.classList.add('button');
    button.classList.add('btn');
    button.type ='button';

    spanName.textContent = enteredVal;
    button.textContent = "Delete";
    
    //appendChild
    li.appendChild(spanName);
    li.appendChild(spanButton);
    spanButton.appendChild(button);
    UL.appendChild(li);
    e.target.querySelector('span input').value =""; //clears the inputfield after submitting 
});

//#3 Searching
const search = document.forms['searchForm'];

search.addEventListener('keyup',function(e){
    e.preventDefault();
    //console.log(e.target.value);
    const list = document.querySelectorAll('ul li');
    list.forEach(function(activityList){
        //console.log(activityList.children[0].innerText);
        const name = activityList.children[0].innerText.toUpperCase();
        const targetName = e.target.value.toUpperCase();
        if (name.indexOf(targetName)!=-1){ //filtering w.r.to index
            activityList.style.display = "block";
        }else{
            activityList.style.display = "none";
        }
    })
});

//#4 Hiding feature
const hide= document.querySelector("#hide");
hide.addEventListener('change',function(e){
    if(hide.checked)
        UL.style.display = "none";
    else
        UL.style.display = "block";
}); 