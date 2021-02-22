// select items

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const container = document.querySelector('.grocery-container');
const submitBtn = document.querySelector('.submit-btn');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option

let editElement;
let editFlag = false;
let editId = '';

// ******Event listeners*******

// submit form
form.addEventListener('submit',addItem);

// clear items
clearBtn.addEventListener('click', clearItems);

// *****Function******
function addItem(e){
    e.preventDefault();
    // targeting input i.e. class with grocery with the property value
    const value = grocery.value
    const id = new Date().getTime().toString();

    if (value && !editFlag){
        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.getAttribute(attr);
        element.innerHTML = `<p class="">${value}</p>
                    <div class="button-container">
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                        </div>`;
        const deleteBtn = element.querySelector('.delete-btn')
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click',editItem);
        // append child
        list.appendChild(element);
        // display alert
        displayAlert('item added to the list','success');
        // show container
        container.classList.add('show-container');
        // add to local storage
        addToLocalStorage(id,value);
        // set back to default
        setBackToDefault();
    }
    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        // edit local storage
        editLocalStorage(editId,value)
        setBackToDefault();
    }
    else{
        displayAlert('please enter the item', 'danger')
    }

}
// display alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
// remove alert
setInterval(function(){
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
}, 3000)
}

// clear items functionality
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        })
        container.classList.remove('show-container');
        displayAlert('empty list', 'danger')
        setBackToDefault();


        
    }
}

// delete item
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    // const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove('show-container')
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);

}

// edit item
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set from value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = 'edit';
}

// set back to default
function setBackToDefault(){
    grocery.value = '';
    editId = '';
    editFlag = false;
    submitBtn.textContent = 'submit';
}

// *******Local Storage********
function addToLocalStorage(id,value){
    const grocery = {id:id, value:value}
    let items = localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    :[];
    console.log(items);
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items))
}
function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item){
        if(item.id !== id){
            return item
        }
    })
    localStorage.setItem('list', JSON.stringify(items))
}

function editLocalStorage(id,value){

}

function getLocalStorage(){
    return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    :[];
}

