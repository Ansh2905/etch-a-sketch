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
 
 
 
 
function getNewDimensions()
{
   let newDimension = prompt("How many squares per side would you like in the new grid");
   removeGrid();
   generateGrid(newDimension);
}
 
function generateGrid(dimension)
{
   for(let i = 0; i < dimension ** 2; i++)
   {
       const div = document.createElement('div');
       div.classList = "squares";
       div.style.border = '1px solid black';
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
   const squares = container.querySelectorAll('.squares');
   squares.forEach(square => square.addEventListener('mouseover', function(e){
       square.style.background = "black";
   }));
}
 
function whiteFill(e)
{
   const squares = container.querySelectorAll('.squares');
   squares.forEach(square => square.addEventListener('mouseover', function(e){
       square.style.background = "white";
   }));
}
 
function randomFill(e)
{
   const squares = container.querySelectorAll('.squares');
   squares.forEach(square => square.addEventListener('mouseover', () => {
       let redColor = Math.floor(255* Math.random());
       let greenColor = Math.floor(255* Math.random());
       let blueColor = Math.floor(255* Math.random());
       square.style.background = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
   }));
}





