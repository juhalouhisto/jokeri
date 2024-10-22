document.addEventListener('DOMContentLoaded', () => {
    
    const newRowButton = document.getElementById('uusiRivi');
    const rowCountDisplay = document.getElementById('riviMaara');
    const numberTable = document.getElementById('taulu');
    
    let rowCount = 0;

    function addRandomNumberRow() {
        const newRow = document.createElement('tr')
        for (let i = 0; i < 7; i++) {
            const cell = document.createElement('td')
            cell.textContent = Math.floor(Math.random() * 10)
            newRow.appendChild(cell)
        }

        numberTable.appendChild(newRow)
        rowCount++
        rowCountDisplay.textContent = `Rivien määrä: ${rowCount}`
    }

    newRowButton.addEventListener('click', addRandomNumberRow)
})
