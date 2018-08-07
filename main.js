window.onload = function() {
//ADD NEW TASKS TO THE LIST
document.querySelector('#addNewItem').addEventListener('click', function(event) {
    const newItem = document.getElementById('item').value;
    const list = document.getElementById('items');

    //CREATE NEW 'li' ELEMENTS
    const newEle = document.createElement('li');
    list.appendChild(newEle);

    //SETTING VALUE ENTERED BY USER TO NEWLY CREATED 'li' ELEMENT
    newEle.innerHTML = "<span>" + newItem + "</span>";

    //ADDING DELETE BUTTON TO LIST ITEM
    const del = document.createElement('button');
    newEle.classList.add('list-style');
    newEle.appendChild(del);

    ///STYLING DELETE BUTTON
    del.setAttribute('class','btn btn-danger btn-sm del-style fa fa-trash');
})

//MARK THE TASKS THAT ARE COMPLETED
document.querySelector('#items').addEventListener('click', function(event) {
    if(event.target.tagName.toLowerCase() === 'span') {
        event.target.classList.toggle('completed');
    }
})

//REMOVE TASKS
document.querySelector('#items').addEventListener('click', function(event) {
    if(event.target.tagName.toLowerCase() === 'button') {
        event.target.parentNode.remove(event.parentNode);
    }
})
}
