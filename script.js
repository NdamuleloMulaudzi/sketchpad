let containerSize = 550;
let nSquare=16;

//get the neccessary DOM elements
let container =document.querySelector("#container")
const sizeBtn= document.querySelector("button")
const body = document.querySelector("body")
const sizeText = document.querySelector("#sizeText")
const clearBtn = document.querySelector("#clearGrid")
const randomColorBtn = document.querySelector("#randomColor")

//event listener that allows one to enter a new number of squares
sizeBtn.addEventListener("click",()=>{
    nSquare= Number(prompt("Enter the Grid Size (MAX:100)"));
    while(nSquare<=0 || nSquare>100){
        nSquare = (prompt("Invalid Size\nEnter Grid Size "))
    }
    container.remove();
    container = document.createElement("div");
    container.setAttribute("id","container");
    createGrid(nSquare)
    body.appendChild(container)
    sizeText.textContent = "Current Grid Size : "+nSquare+ " x "+nSquare
    body.appendChild(sizeText)
    
 })

function getRandomColor(){
    return Math.floor(Math.random()*255)
}



 

//Function that creates a box with squares 
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
            clearBtn.addEventListener("click", ()=>{
                square.style.background = "white"
            })
            randomColorBtn.addEventListener("click",()=>{
                square.addEventListener("mouseenter",()=>{
                    square.style.background = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`
                    
                })
            })
            

            
        }
        
    }

}

 createGrid(nSquare)
 
 //basic styles
 sizeText.setAttribute("style",
    "font-size:20px; color:white; font-weight:bold")
clearBtn.setAttribute("style",
    "font-size:20px"
)