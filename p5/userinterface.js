var solution = true;
var directShowBool = false;
var start = false;


var second=0;

function mySelectEvent(){
    var item = document.getElementById("mazeSize").value;
    console.log(document.getElementById("mazeSize").value);
    if(item === "smallSize")
    {
        if(canvasx === 1920)
        size = 40;

        else
        size = 20;
    }
    else if(item === "mediumSize")
    {
        if(canvasx === 1920)
        size =20;

        else 
        size =10;
    }
    else if(item === "largeSize"){
        if(canvasx === 1920)
        size = 10;

        else
        size = 5;
    }
    refreshMaze();
}
function startStop(){
    start = !start;
}
function showTheSolution(){
    solution = !solution;
}
function directShow(){
    directShowBool = !directShowBool;
}
function refreshMaze(){
    setToInitial();

    mazeController();

    pathFindingController();
}
function setToInitial(){
    cols = floor(width/size);
    rows = floor(height/size);
    grid = [];
    for(var j =0; j < rows;j++){
        for(var i =0;i<cols;i++){
          var cell = new Cell(i,j);
          grid.push(cell);
        }
    }
    isMazeDone = false;
    pathDone = false;
    isPathAvailable = true;
    treaths =0;
    wayIndex =0;
    currentWay.elements = [];
    current = grid[0];
    grid[0].start = true;
    startNode = grid[0];
    currentWay.enqueue(startNode);
    currentWay.lastPeek().wayVisited =true;
    grid[grid.length-1].finish = true;
    finishNode = grid[grid.length-1];
    start = false;
    directShowBool = false;
}

