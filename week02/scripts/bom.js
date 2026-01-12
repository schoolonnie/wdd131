const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() === '') {
        alert('Please enter a book and chapter.');
        input.focus();
    }
    else if (list.textContent.includes(input.value.trim())) { 
        alert('This chapter is already in the list.');
        input.value = '';
        input.focus();
    }
    else {
        const li = document.createElement('li');
        li.textContent = input.value;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        
        list.append(li);
        
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        
        input.value = '';
        input.focus();
    }
});
