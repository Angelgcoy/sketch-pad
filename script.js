const container = document.querySelector(".container");



function divGenerator (number) {
    
    if (number < 0 || number > 64) {
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
const gridDivs = document.querySelectorAll(".grid");

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
//ESTOY INTENTANDO QUE CHANGE COLOR SEA UNA PARAMETRO EN EL ADDEVENT PARA PODER PONER ALGO QUE LO DESACTIVE ADENTRO.
//necesito que la funcion sea un paramnetro para poder mencionarlo en el remoedor de addeventlistener
console.log(gridDivs.length);

gridDivs.forEach((div) => { 
    div.addEventListener("mouseover", () => {
        changeColor(div)
    }, {once: true});
  
     
    });
    
    




//colores de divs cambian cuando les pasas por encima el cursor.
//usar evento mousemove
//mouse move debe ser declarano = null al final del body function para que no se active mas