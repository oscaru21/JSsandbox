const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

const generateTemplate = todo => {
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
        <span class="delete">X</span>
    </li>
    `;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = e.target.add.value.trim();  
    if(todo.length != 0){
        list.innerHTML += generateTemplate(todo);
        addForm.reset();
    }
});

//delete elements
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filteredElements = (term) => {
    Array.from(list.children)
        .filter(li => !li.textContent.toLowerCase().includes(term.toLowerCase()))
        .forEach(a => a.classList.add('filtered'));
    Array.from(list.children)
        .filter(li => li.textContent.toLowerCase().includes(term.toLowerCase()))
        .forEach(a => a.classList.remove('filtered'));
};

//keyup listener
search.addEventListener('keyup', e => {
    let term = e.target.value.trim();
    filteredElements(term);
});

const now = new Date();
console.log(now.toLocaleDateString());