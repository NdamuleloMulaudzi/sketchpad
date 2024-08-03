const container =document.querySelector("#container")

let containerSize = 500;

function createGrid(nSquare){
    for(let i=0;i<nSquare;i++){
        for(let j=0;j<nSquare;j++){
            const square = document.createElement("div");
            square.setAttribute("id", "squaredivs");
            square.style.width = containerSize/nSquare + "px"
            square.style.height = containerSize/nSquare + "px"

            container.appendChild(square)
        }
    }
    
}

createGrid(3)
