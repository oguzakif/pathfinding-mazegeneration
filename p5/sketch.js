//Maze generation and path finding algorithm implementation
//by Oğuz Akif Tüfekcioğlu
//aka sonofrifleman

var canvasx;
var canvasy;
var size;

function myFunction(x) {
  if (x.matches) { // If media query matches
    canvasx = 400;
    canvasy = 200;
    
    size = 10;

    buttonh = 25;
    buttonDistance = 100;
  } else {
    canvasx = 1000;
    canvasy = 500;
    
    size = 20;

    buttonh = 50;
    buttonDistance = 200;
   
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
//x.addListener(myFunction) // Attach listener function on state changes

var cols;
var rows;
var grid = [];
var walls = [];
var current;

var stack = [];

var currentWay = new Queue();
var isMazeDone = false;
var crossNodes = [];
var startNode;
var finishNode;
var pathDone = false;
var isPathAvailable = true;
var treaths =0;

function setup() {
  createCanvas(canvasx,canvasy);
  showInterface();

  cols = floor(width/size);
  rows = floor(height/size);
  frameRate(120);
  pixelDensity(5);
  for(var j =0; j < rows;j++){
    for(var i =0;i<cols;i++){
      var cell = new Cell(i,j);
      grid.push(cell);
    }
  }
  current = grid[0];
  startNode = grid[0];
  currentWay.enqueue(startNode);
  currentWay.lastPeek().wayVisited =true;
  finishNode = grid[grid.length-1];
  //initStatistics();

  while(!isMazeDone)
  {
  generateMaze();
  }
}

function draw() {
  background(50);
  
  for(var i =0;i<grid.length;i++){
    grid[i].show();
  }
  showStatistics();

  if(start)
  pathFinding();

  if(solution)
  currentWay.showLine();

  reGenerateButton.mousePressed(refreshPage);
  visibilityButton.mousePressed(showTheSolution);
  startStopButton.mousePressed(startStop);

  
}

function index(i, j){
  if(i< 0 || j < 0 || i> cols-1 || j > rows-1){
    return -1;
  }
  return i+j*cols;
}