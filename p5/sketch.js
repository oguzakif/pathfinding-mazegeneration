//Maze generation and path finding algorithm implementation
//by Oğuz Akif Tüfekcioğlu
//aka sonofrifleman

var canvasx = window.screen.width;
var canvasy = 2*canvasx/5;
var size;

function myFunction(x) {
  if (x.matches) { // If media query matches
    size = 10;
    canvasy = 3*canvasx/5;
  } else {
    size = 20;
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
//x.addListener(myFunction) // Attach listener function on state changes

var cols;
var rows;
var grid = [];
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
var wayIndex=0;

function setup() {
  p5.disableFriendlyErrors = true
  createCanvas(canvasx,canvasy);

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
  grid[0].start = true;
  startNode = grid[0];
  currentWay.enqueue(startNode);
  currentWay.lastPeek().wayVisited =true;
  grid[grid.length-1].finish = true;
  finishNode = grid[grid.length-1];

  mazeController();
  pathFindingController();

}

function draw() {
  for(var i =0;i<grid.length;i++){
    grid[i].show();
  }

  if(solution && start && !directShowBool){
    if(wayIndex < currentWay.size())
    wayIndex++;

    currentWay.showLine(wayIndex);
  }
  else if(solution && !start && !directShowBool){
    currentWay.showLine(wayIndex);
  }
  else if(solution && directShowBool){
    currentWay.showDirectly();
  }
  //startTimer();

  
}

function index(i, j){
  if(i< 0 || j < 0 || i> cols-1 || j > rows-1){
    return -1;
  }
  return i+j*cols;
}