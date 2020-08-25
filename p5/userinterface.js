var solution = true;
var start = false;
var buttonh;
var buttonw= buttonh*(2.5);
var visibilityButton;
var reGenerateButton;
var startStopButton;
var select;

var buttonDistance;

var contextStartStop = "Start/Stop";
var contextVisibility = "Change the visibility of solution.";
var contextReGenerate = "Regenerate the maze.";

var second=0;
function showInterface(){
    var title = createElement('h1',"Maze Generation and PathFinding");
    if(canvasx === 1280)
    title.style('color:#F9eee2; font-size:50px');

    else 
    title.style('color:#F9eee2; font-size:25px');

    title.center();

    generateVisibility(contextVisibility);  //for the visibility button.
    generateReButton(contextReGenerate);    //for the regenerating the maze without refreshing the page.
    generateStartStop(contextStartStop);
    initSelect();
}
function initSelect(){
    select = createSelect();
    if(canvasx === 1280){
        select.option("32x18 Maze");
        select.option("64x36 Maze (initial)");
        select.option("128x72 Maze");
        select.selected("64x36 Maze (initial)");
    }
    else{
        select.option("20x15 Maze");
        select.option("40x30 Maze (initial)");
        select.option("80x60 Maze");
        select.selected("40x30 Maze (initial)");
    }
    
    select.center();
    select.changed(mySelectEvent);

}
function mySelectEvent(){
    var item = select.value();
    if(item === "64x36 Maze (initial)" || item === "40x30 Maze (initial)")
    {
        if(canvasx === 1280)
        size = 20;

        else
        size = 8;
    }
    else if(item === "20x15 Maze" || item === "20x15 Maze")
    {
        if(canvasx === 1280)
        size =40;

        else 
        size =16;
    }
    else if(item === "128x72 Maze" || item === "80x60 Maze"){
        if(canvasx === 1280)
        size = 10;

        else
        size = 4;
    }
    refreshMaze();
}
function generateVisibility(context){
    visibilityButton = createButton(context);
    visibilityButton.size(buttonw,buttonh);
    visibilityButton.center();
    if(canvasx === 1280)
    visibilityButton.style('margin-top:840px; margin-left:175px');

    else
    visibilityButton.style('margin-top:540px ');

}
function generateReButton(context){
    reGenerateButton = createButton(context);
    reGenerateButton.size(buttonw,buttonh);
    reGenerateButton.center();

    if(canvasx === 1280)
    reGenerateButton.style('margin-top:840px; margin-left:-150px');

    else
    reGenerateButton.style('margin-top:460px');
}
function generateStartStop(context){
    startStopButton = createButton(context);
    startStopButton.size(buttonw, buttonh);
    startStopButton.center();

    if(canvasx === 1280)
    startStopButton.style('margin-top:840px');

    else
    startStopButton.style('margin-top:500px');

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
}

