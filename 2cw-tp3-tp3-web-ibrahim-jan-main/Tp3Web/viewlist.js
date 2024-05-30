document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const backButton = document.getElementById('back-button');
    const resetButton = document.getElementById('reset-button');

    const loadItems = () => {
        const items = JSON.parse(localStorage.getItem('taskList')) || [];
        taskList.innerHTML = '';
        items.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            taskList.appendChild(listItem);
        });
    };

    backButton.addEventListener('click', () => {
        window.location.href = 'taches.html';
    });

    resetButton.addEventListener('click', () => {
        localStorage.removeItem('taskList');
        loadItems();
    });

    loadItems();
});