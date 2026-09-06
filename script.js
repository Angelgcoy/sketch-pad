const container = document.querySelector(".container");
const createButton = document.createElement("button");
                       createButton.id = "gridButton"
                       createButton.textContent = "Change size"

container.before(createButton)
                       

//Funcion para crear el grid
function divGenerator (number) {
    
    if (number < 0 || number > 100) {
        return alert("limit exceeded")
    }
    else {
      
      const size = 100 / number;

      for( let i = 0; i < number*number; i++) {
       const cell = document.createElement("div");
           cell.classList.add("grid");
           cell.style.width = size + "%"
           cell.style.height = size + "%"
           container.appendChild(cell);
         
     }
   }
}

divGenerator(10);



//retorna una varaible con un color rgb aleatorio
function rgbColor() {
          const randomRGBNone = Math.floor(Math.random() * 256);
          const randomRGBNtwo = Math.floor(Math.random() * 256);
          const randomRGBNthree = Math.floor(Math.random() * 256);
          const randomColor = `rgb(${ randomRGBNone}, ${randomRGBNtwo}, ${randomRGBNthree})`;
        return randomColor;       
 };

function changeColor(objective) {
    return objective.style.backgroundColor = rgbColor(); 
    
}
//this sets the grid to 0
const removeGrid = () => { container.innerHTML = "";}

 
const animation = () => {
  const gridDivs = document.querySelectorAll(".grid");
    
 gridDivs.forEach((div) => { 
    div.addEventListener("mouseover", () => {changeColor(div) }, {once: true});
   });
   }

    animation()


gridButton.addEventListener("click", () => {
  const askPrompt = prompt("set a grid size less than 200","it works like a e.g 4x4 grid");
    if  (isNaN(askPrompt) ) {
        alert("ERROR: DETECTED A NOT NUMBER ELEMENT")
    ;}
    if (askPrompt > 100 || askPrompt <= 0)  {
        alert("Error at Grid Range, please select a size between 1 and 100");
    }
    else { removeGrid()
           divGenerator(askPrompt)
           animation()
        }
    })

   

   //askPrompt()
  



console.log(askPrompt)
//colores de divs cambian cuando les pasas por encima el cursor.
//usar evento mousemove
//mouse move debe ser declarano = null al final del body function para que no se active mas
