const input = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');


buttonElement.addEventListener('click', function() {
    if (input.value.trim() != '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'
        deleteButton.addEventListener("click", function() {
            listElement.removeChild(li);
            input.focus();
        });
        li.append(deleteButton);
        listElement.appendChild(li);
        input.value = '';
    }
    inputElement.focus();
});

