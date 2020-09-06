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
    
    console.log("currentWay.lastPeek(): ");
    console.log(currentWay.lastPeek());
    var right   = grid[index(currentWay.lastPeek().i+1 ,currentWay.lastPeek().j)];
    var bottom  = grid[index(currentWay.lastPeek().i ,currentWay.lastPeek().j+1)];
    var top     = grid[index(currentWay.lastPeek().i ,currentWay.lastPeek().j-1)];
    var left    = grid[index(currentWay.lastPeek().i-1 ,currentWay.lastPeek().j)];

    if(right && !right.wall){

      if(!right.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = right;
      }
      
    }
  
    if(bottom && !bottom.wall) {

      if(!bottom.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = bottom;
      }
      
    }

    if(top && !top.wall) {

      if(!top.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = top;
      }
    }
   
    if(left && !left.wall) {

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
      }
      traceNode.wayVisited = true;
      currentWay.enqueue(traceNode);
      flag = true;
      treaths++;
    }
    
    return flag;
  }
  
  function backToCrossNode(){
    var crossNode = checkCrossNodeIsDone();
    console.log("CrossNode");
    console.log(crossNode);
      for(var i =0; i<currentWay.size();i++){
        if(currentWay.lastPeek() != crossNode)
          {
            currentWay.lastDequeue();
          }
      }
  }
  function checkCrossNodeIsDone(){
    var counter =0;
    var right   = grid[index(crossNodes[crossNodes.length-1].i+1 ,crossNodes[crossNodes.length-1].j)];
    var bottom  = grid[index(crossNodes[crossNodes.length-1].i ,crossNodes[crossNodes.length-1].j+1)];
    var top     = grid[index(crossNodes[crossNodes.length-1].i ,crossNodes[crossNodes.length-1].j-1)];
    var left    = grid[index(crossNodes[crossNodes.length-1].i-1 ,crossNodes[crossNodes.length-1].j)];
    
    
    if(right && !right.wall){
      if(!right.wayVisited){
        counter++;
      }
    }
  
    if(bottom && !bottom.wall) {
      if(!bottom.wayVisited){
        counter++;
      }
    }

    if(top && !top.wall ) {
      if(!top.wayVisited){
        counter++;
      }
    }
    
    if(left && !left.wall) {
      if(!left.wayVisited){
        counter++;
      }
    }

    if(counter ===3) console.log("4 way");
    if(counter>2) return crossNodes[crossNodes.length-1];
    //else if(grid[crossNodes.length-1] === grid[0]) return crossNodes[crossNodes.length-1];
    else return crossNodes.pop();

  }
  function isPathDone(){
    return currentWay.lastPeek() === finishNode;
  }