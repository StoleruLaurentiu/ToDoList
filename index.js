function addElement(){

    const text = document.getElementById('task').value;  
    if(text === "" ){
        alert("Enter a task");
    }
    else{
        const tasksList = document.getElementById('tasks');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        tasksList.appendChild(li);
        document.getElementById('task').value = "";
    }
    
}

function deleteChecked(){
    const items = document.querySelectorAll('#tasks li');

    for(let i = 0;i< items.length;i++){
        let li = items[i];
        if(li.classList.contains('checked')){
            li.parentNode.removeChild(li);
        }
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

