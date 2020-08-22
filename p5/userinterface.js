var solution = true;
var start = false;
var buttonh;
var buttonw= buttonh*(2.5);
var visibilityButton;
var reGenerateButton;
var startStopButton;

var buttonDistance;

var contextStartStop = "Start/Stop";
var contextVisibility = "Change the visibility of solution.";
var contextReGenerate = "Regenerate the maze.";

var second=0;
function showInterface(){
    var title = createElement('h1',"Maze Generation and PathFinding");
    if(canvasx === 1000)
    title.style('color:#F9eee2; font-size:50px');

    else 
    title.style('color:#F9eee2; font-size:25px');

    title.center();

    generateVisibility(contextVisibility);  //for the visibility button.
    generateReButton(contextReGenerate);    //for the regenerating the maze without refreshing the page.
    generateStartStop(contextStartStop);
}
function generateVisibility(context){
    visibilityButton = createButton(context);
    visibilityButton.size(buttonw,buttonh);
    visibilityButton.center();
    if(canvasx === 1000)
    visibilityButton.style('margin-top:800px; margin-left:175px');

    else
    visibilityButton.style('margin-top:530px ');

}
function generateReButton(context){
    reGenerateButton = createButton(context);
    reGenerateButton.size(buttonw,buttonh);
    reGenerateButton.center();

    if(canvasx === 1000)
    reGenerateButton.style('margin-top:800px; margin-left:-150px');

    else
    reGenerateButton.style('margin-top:450px');
}
function generateStartStop(context){
    startStopButton = createButton(context);
    startStopButton.size(buttonw, buttonh);
    startStopButton.center();

    if(canvasx === 1000)
    startStopButton.style('margin-top:800px');

    else
    startStopButton.style('margin-top:490px');

}
function startStop(){
    start = !start;
}
function showTheSolution(){
    solution = !solution;
}
function showStatistics(){
    var statistics ="Treaths: "+treaths;
    if(canvasx === 400){
        var statistic = text(statistics, canvasx, canvasy);
    }

    else{
        var statistic = text(statistics, canvasx, canvasy);
    }
    second++;
}
function refreshPage(){
    window.location.reload();
} 
function refreshMaze(){
    setToInitial();

    mazeController();
}
function setToInitial(){
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
    currentWay.elements = [];
    current = grid[0];
    grid[0].start = true;
    startNode = grid[0];
    currentWay.enqueue(startNode);
    currentWay.lastPeek().wayVisited =true;
    grid[grid.length-1].finish = true;
    finishNode = grid[grid.length-1];
}

