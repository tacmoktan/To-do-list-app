const UL = document.querySelector('.container ul');
//event bubbling
//since buttons were used so have to click double
UL.addEventListener('click',function(e){
    const ul = e.target.parentNode.parentNode.parentNode;
    console.log(ul);
    ul.removeChild(ul.childNodes[0]);
});

