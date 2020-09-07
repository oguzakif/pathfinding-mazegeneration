var solution = true;
var directShowBool = false;
var start = false;


var second=0;

function mySelectEvent(){
    var item = document.getElementById("mazeSize").value;

    if(item === "smallSize")
    {
        if(canvasx > 700){
            size = 40;
            canvas.style('border-left: 40px solid black; border-top: 40px solid black');
        }

        else{
            canvas.style('border-left: 20px solid black; border-top: 20px solid black');
            size = 20;
        }
    }
    else if(item === "mediumSize")
    {
        if(canvasx > 700){
            
            size =20;
            canvas.style('border-left: 20px solid black; border-top: 20px solid black');
        }

        else {
            canvas.style('border-left: 10px solid black; border-top: 10px solid black');
            size =10;
        }
    }
    else if(item === "largeSize"){
        if(canvasx > 700){
            size = 10;
            canvas.style('border-left: 10px solid black; border-top: 10px solid black');
        }

        else{
            canvas.style('border-left: 5px solid black; border-top: 5px solid black');
            size = 5;
        }
    }
    setToInitial();
}
function startStop(){
    start = !start;
    /*if(start)
    deleteToWayIndex();*/
}
function showTheSolution(){
    solution = !solution;
}
function directShow(){
    directShowBool = !directShowBool;
    if(!directShowBool)
    deleteToIndex(wayIndex, currentWay.size());

}
function refreshMaze(){
    

    setToInitial();
    mazeController();

    //pathFindingController();
    
}
function getWidth() {
    if (self.innerWidth) {
      return self.innerWidth;
    }
  
    if (document.documentElement && document.documentElement.clientWidth) {
      return document.documentElement.clientWidth;
    }
  
    if (document.body) {
      return document.body.clientWidth;
    }
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
    wayIndex =0;
    currentWay.elements = [];
    frontierNodes = [];
    current = grid[0];
    grid[0].start = true;
    currentWay.enqueue(grid[0]);
    currentWay.lastPeek().wayVisited =true;
    grid[index(cols-2,rows-2)].finish = true;
    finishNode =  grid[index(cols-2,rows-2)];
    start = false;
    directShowBool = false;
}
function deleteToIndex(index, len){
    for(var i =index;i<len;i++){
        currentWay.elements[i].show();
    }
}
