const draggable_list = document.getElementById('draggable_list');
const check = document.getElementById('check');

const richestPeople = [
    "Jeff Bezos",
    "Elon Musk",
    "Bernard Arnault",
    "Bill Gates",
    "Mark Zuckerberg",
    "Warren Buffett",
    "Larry Ellison",
    "Larry Page",
    "Sergey Brin",
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
    [...richestPeople].forEach((person, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);
        
        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable = "true">
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"></i>
        </div>    
        `;

        listItems.push(listItem);

        draggable_list.appendChild(listItem);
    });
}