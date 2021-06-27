const dimensions = document.querySelector('#dimensions');
dimensions.addEventListener('click', getNewDimensions);
const container = document.querySelector('#container');
generateGrid(16);
const black = document.querySelector("#black");
const random = document.querySelector("#random");
const white = document.querySelector("#white");
black.addEventListener('click', blackFill);
white.addEventListener('click', whiteFill);
random.addEventListener('click', randomFill);
reset = document.querySelector("#reset");
reset.addEventListener('click', resetGrid);
 
 
 
function getNewDimensions()
{
   let newDimension = prompt("How many squares per side would you like in the new grid");
   removeGrid();
   generateGrid(newDimension);
}
 
function generateGrid(dimension)
{
    normalButtons();
   for(let i = 0; i < dimension ** 2; i++)
   {
       const div = document.createElement('div');
       div.classList = "squares";
       div.style.border = '1px solid #D3D3D3';
       div.style.borderRadius = "10%";
       div.style.background = "white";
       container.appendChild(div);
   }
   container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
   container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
}
function removeGrid()
{
   let grids = container.querySelectorAll('.squares');
   grids.forEach(grid => container.removeChild(grid));
}
 
 
 
function blackFill(e)
{
    const whiteButton = document.querySelector("#white");
    const randomButton = document.querySelector("#random");
    whiteButton.style.background = "white";
    randomButton.style.background = "white";
    e.target.style.background = "silver";
   const squares = container.querySelectorAll('.squares');
   squares.forEach(square => square.addEventListener('mouseover', function(e){
       square.style.background = "black";
   }));
}
 
function whiteFill(e)
{
    const blackButton = document.querySelector("#black");
    const randomButton = document.querySelector("#random");
    blackButton.style.background = "white";
    randomButton.style.background = "white";
    e.target.style.background = "silver";
   const squares = container.querySelectorAll('.squares');
   squares.forEach(square => square.addEventListener('mouseover', function(e){
       square.style.background = "white";
   }));
}
 
function randomFill(e)
{
    const blackButton = document.querySelector("#black");
    const whiteButton = document.querySelector("#white");
    blackButton.style.background = "white";
    whiteButton.style.background = "white";
    e.target.style.background = "silver";
   const squares = container.querySelectorAll('.squares');
   console.log(squares);
   squares.forEach(square => square.addEventListener('mouseover', () => {
       let redColor = Math.floor(255* Math.random());
       let greenColor = Math.floor(255* Math.random());
       let blueColor = Math.floor(255* Math.random());
       square.style.background = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
   }));
}

function resetGrid()
{
    const squares = container.querySelectorAll('.squares');
    console.log(squares);
    squares.forEach(square => square.style.background = "white");
}

function normalButtons() //To remove the background color from the buttons when a new grid is created so that the buttons dont look selected
{
    const blackButton = document.querySelector("#black");
    const randomButton = document.querySelector("#random");
    const whiteButton = document.querySelector("#white");
    blackButton.style.background = "white";
    randomButton.style.background = "white";
    whiteButton.style.background = "white";
}





