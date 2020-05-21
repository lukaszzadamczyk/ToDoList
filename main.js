const toDoList = [];

const form = document.querySelector('form');
const input = document.querySelector('input.task');
const findTasks = document.querySelector('input.search');
const h1 = document.querySelector('h1 span');
const ul = document.querySelector('ul');

const renderList = () => {
    ul.textContent = '';
    toDoList.forEach((liElement, key) => {
        liElement.dataset.key = key;
        ul.appendChild(liElement)
    })
}

const tasksLength = () => {
    h1.textContent = document.querySelectorAll('li').length;
}

const removeTask = (e) => {
    // e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    renderList();
    tasksLength();
}

const addTask = (e) => {
    e.preventDefault();
    const task = input.value;
    if (task === '') return;
    liTask = document.createElement('li');
    ul.appendChild(liTask);
    liTask.innerHTML = task + ' <button>Delate</button>'
    toDoList.push(liTask);
    renderList();
    input.value = '';
    tasksLength();
    liTask.querySelector('button').addEventListener('click', removeTask);
}

const checkTasks = (e) => {
    const findTask = e.target.value.toLowerCase();
    let tasks = toDoList;
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(findTask));
    ul.textContent = '';
    tasks.forEach(li => ul.appendChild(li));
    tasksLength();
}

form.addEventListener('submit', addTask);
findTasks.addEventListener('input', checkTasks);