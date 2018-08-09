const gridSize = 10
const main = document.querySelector('main')
let currentColor

for (let i = 0; i < gridSize; i++) {
    let row = createRow();
    row = appendCellsTo(row, gridSize)
    main.append(row)
}

function createRow() {
    const div = document.createElement('div');
    div.classList.add('row');
    return div;
}

function appendCellsTo(row, numberToCreate) {
    for (let i = 0; i < numberToCreate; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('click', (event) => {
            event.target.style.backgroundColor = currentColor
        })
        console.log(currentColor)
        row.append(div);
    }
    return row;
}

const colorPalette = document.querySelector(".color-palette")

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'gray', 'black']

colors.forEach(color => {
    const brush = document.createElement('span')
    brush.classList.add('brush')
    brush.style.backgroundColor = color
    brush.dataset.color = color
    brush.addEventListener('click', (event) => {
        currentColor = event.target.dataset.color
    })
    colorPalette.appendChild(brush)
})