const container = document.querySelector(".container")


function divGenerator (number) {
    const size = 100 / number;
    
    for( let i = 0; i < number*number; i++) {
       const cell = document.createElement("div");
        cell.classList.add("grid");
        cell.style.width = size + "%"
        cell.style.height = size + "%"
        container.appendChild(cell);
        
    }
    
}

divGenerator(20)