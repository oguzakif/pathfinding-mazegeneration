function pathFindingController(){
  while(isMazeDone && !pathDone){
    pathFinding();
  }
}

function pathFinding(){
    //Path Finding
  if(isMazeDone && !pathDone){
    //STEP 1
    isPathAvailable = tracePath();
  
      //STEP 2
    if(!isPathAvailable && crossNodes.length > 0){
      backToCrossNode();
    }

    //CHECKING PATH IS DONE
    pathDone = isPathDone();

    if(!pathDone && currentWay.length === 0) {
      pathDone = true;
      console.log("Sorry the path couldn't found.");
    }
  }
  finishNode.wall = false;
}

function tracePath(){
    var counter = 0;
    var flag;
    var traceNode;
    

    if(!currentWay.lastPeek().walls[1]){
      var right   = grid[index(currentWay.lastPeek().i+1 ,currentWay.lastPeek().j)];

      if(!right.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = right;
      }
      
    }
  
    if(!currentWay.lastPeek().walls[2]) {
      var bottom  = grid[index(currentWay.lastPeek().i ,currentWay.lastPeek().j+1)];

      if(!bottom.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = bottom;
      }
      
    }

    if(!currentWay.lastPeek().walls[0]) {
      var top     = grid[index(currentWay.lastPeek().i ,currentWay.lastPeek().j-1)];

      if(!top.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = top;
      }
    }
   
    if(!currentWay.lastPeek().walls[3]) {
      var left    = grid[index(currentWay.lastPeek().i-1 ,currentWay.lastPeek().j)];

      if(!left.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = left;
      }
    }
   
  
    if(counter === 0) {
      flag = false;
    }
  
    else{
      if(counter > 1){
          crossNodes.push(currentWay.lastPeek());
          console.log(currentWay.lastPeek());
          console.log(counter);
          console.log("-------------------------");
      }
      currentWay.lastPeek().wayVisited = true;
      traceNode.wayVisited = true;
      currentWay.enqueue(traceNode);
      flag = true;
      treaths++;
    }
    
    return flag;
  }
  
  function backToCrossNode(){

    var crossNode = crossNodes.pop();
    /*console.log("......");
    console.log(crossNode);
    console.log("......");*/
      for(var i =0; i<currentWay.size();i++){
        if(currentWay.lastPeek() != crossNode)
          {
            currentWay.lastDequeue();
          }
      }
  }
  function isPathDone(){
    return currentWay.lastPeek() === finishNode;
  }
  function checkNeighbors(){
    for(let i =0;i<grid.length;i++){
      grid[i].walls[0] = grid[i].searchWalls(0,-1);
      grid[i].walls[1] = grid[i].searchWalls(1,0);
      grid[i].walls[2] = grid[i].searchWalls(0,1);
      grid[i].walls[3] = grid[i].searchWalls(-1,0);
      grid[i].frontier = false;
    }
  }