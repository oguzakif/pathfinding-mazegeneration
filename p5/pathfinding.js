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
    if(!isPathAvailable)
    backToCrossNode();

    //CHECKING PATH IS DONE
    pathDone = isPathDone();
    
  }
}

function tracePath(){
    var counter = 0;
    var flag;
    var traceNode;
    var wallCounter = 0;


    var right   = grid[index(currentWay.lastPeek().i+1 ,currentWay.lastPeek().j)];
    var bottom  = grid[index(currentWay.lastPeek().i ,currentWay.lastPeek().j+1)];
    var top     = grid[index(currentWay.lastPeek().i ,currentWay.lastPeek().j-1)];
    var left    = grid[index(currentWay.lastPeek().i-1 ,currentWay.lastPeek().j)];
    
    
    if(right && !right.wall && currentWay.lastPeek().i < cols-1){
      wallCounter++;
  
      if(!right.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = right;
      }
      
    }
  
    if(bottom && !bottom.wall && currentWay.lastPeek().j < rows -1) {
      wallCounter++;
  
  
      if(!bottom.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = bottom;
      }
      
    }

    

    if(top && !top.wall && currentWay.lastPeek().j > 0) {
      wallCounter++;
      if(!top.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = top;
      }
      
    }
   
    
    
    if(left && !left.wall && currentWay.lastPeek().i > 0) {
      wallCounter++;
  
  
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
    var counter =0;
    var crossNode = crossNodes.pop();
  
      for(var i =0; i<currentWay.size();i++){
        if(currentWay.lastPeek() != crossNode)
          {
            currentWay.lastDequeue();
            counter++;
          }
      }
  }
  function isPathDone(){
    return currentWay.lastPeek() == finishNode;
  }