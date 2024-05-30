document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');
    const viewListButton = document.getElementById('view-list-button');

    const loadItems = () => {
        const items = JSON.parse(localStorage.getItem('taskList')) || [];
        itemList.innerHTML = '';
        items.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            itemList.appendChild(listItem);
        });
    };

    addButton.addEventListener('click', () => {
        const task = itemInput.value.trim();
        if (task !== '') {
            let items = JSON.parse(localStorage.getItem('taskList')) || [];
            items.push(task);
            localStorage.setItem('taskList', JSON.stringify(items));
            loadItems();
            itemInput.value = '';
        }
    });

    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });

    viewListButton.addEventListener('click', () => {
        window.location.href = 'viewList.html';
    });

    loadItems();
});
