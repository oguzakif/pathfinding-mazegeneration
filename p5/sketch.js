//Maze generation and path finding algorithm implementation
//by Oğuz Akif Tüfekcioğlu
//aka sonofrifleman

var canvasx;
var canvasy;
var canvas;
var size;

function myFunction(x) {
  if (x.matches) { // If media query matches
    size = 10;
    canvasx = 400;
    canvasy = canvasx/2;
  } else {
    canvasx = 1280;
    canvasy = 640;

    size = 20;
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
//x.addListener(myFunction) // Attach listener function on state changes

var cols;
var rows;
var grid = [];
var frontierNodes = [];
var current;

var stack = [];

var currentWay = new Queue();
var isMazeDone = false;
var crossNodes = [];
var pathDone = false;
var finishNode;
var isPathAvailable = true;
var treaths =0;
var wayIndex=0;
//p5.disableFriendlyErrors = true;

function setup() {
  canvas = createCanvas(canvasx,canvasy);

  cols = floor(width/size);
  rows = floor(height/size);
  frameRate(120);
  for(var j =0; j < rows;j++){
    for(var i =0;i<cols;i++){
      var cell = new Cell(i,j);
      grid.push(cell);
    }
  }

  current = grid[0];
  grid[0].start = true;
  currentWay.enqueue(grid[0]);
  currentWay.lastPeek().wayVisited =true;
  grid[index(cols-2,rows-2)].finish = true;
  finishNode =  grid[index(cols-2,rows-2)];
  //mazeController();
  //pathFindingController(); 
  
  
  //noLoop();
  
}

function draw() {
  //setInterval(redraw, 50);

  if(!pathDone){
    for(var i =0;i<grid.length;i++){
      grid[i].show();
    }
  }

  generateMaze();
  if(solution && start && !directShowBool){
    /*if(wayIndex < currentWay.size())
    wayIndex++;
    currentWay.showLine(wayIndex);*/
    pathFinding();
    currentWay.show();
  }
  /*else if(solution && !start && !directShowBool){
    currentWay.showLine(wayIndex);
  }*/
  else if(solution && !start && !directShowBool){
    currentWay.show();
  }
  else if(solution && directShowBool){
    pathFindingController();
    currentWay.show();
  }
  /*else if(!solution)
  deleteToIndex(0,wayIndex);*/
  //startTimer();

  
}

function index(i, j){
  if(i< 0 || j < 0 || i> cols-1 || j > rows-1){
    return -1;
  }
  return i+j*cols;
}
