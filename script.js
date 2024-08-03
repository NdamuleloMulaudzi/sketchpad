let containerSize = 500;
let nSquare=16;

let container =document.querySelector("#container")
const sizeBtn= document.querySelector("button")
const body = document.querySelector("body")



sizeBtn.addEventListener("click",()=>{
    nSquare= Number(prompt("Enter the Grid Size (MAX:100)"));
    while(nSquare<=0 || nSquare>100){
        nSquare = Number(prompt("Invalid Size\nEnter Grid Size "))
    }
    container.remove();
    container = document.createElement("div")
    container.setAttribute("id", "container");
    createGrid(nSquare)
    body.appendChild(container)
 })



function createGrid(nSquare){
    for(let i=0;i<nSquare;i++){
        for(let j=0;j<nSquare;j++){
            const square = document.createElement("div");
            square.setAttribute("id", "squaredivs");
            square.style.width = containerSize/nSquare + "px"
            square.style.height = containerSize/nSquare + "px"

            container.appendChild(square)
            
            square.addEventListener("mouseenter", ()=>{
                square.style.background = "black"
            })
            
        }
        
    }

}

 createGrid(nSquare)
 
 