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



divGenerator(30);
const gridDivs = document.querySelectorAll(".grid");

function changeDivsColor() {
          const randomRGBNone = Math.floor(Math.random() * 256);
          const randomRGBNtwo = Math.floor(Math.random() * 256);
          const randomRGBNthree = Math.floor(Math.random() * 256);
          const randomColor = `rgb(${ randomRGBNone}, ${randomRGBNtwo}, ${randomRGBNthree})`;
        return randomColor;
      
        

 }
console.log(gridDivs.length);

gridDivs.forEach((div) => {
    div.addEventListener("mouseover",() => {
        div.style.backgroundColor = changeDivsColor()
        
    })


    });
    




//colores de divs cambian cuando les pasas por encima el cursor.
//usar evento mousemove
//mouse move debe ser declarano = null al final del body function para que no se active mas