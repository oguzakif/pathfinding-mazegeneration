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
    //STEP 3
    currentWay.showLine();


  }
  else if (isMazeDone){
    button.mousePressed(showTheSolution);
    if(solution)
    currentWay.showLine();
  }
}

function tracePath(){
    var counter = 0;
    var flag;
    var traceNode;
    var wallCounter = 0;
   
  
    if(!currentWay.lastPeek().walls[2] && currentWay.lastPeek().j < rows -1) {
      wallCounter++;
  
      var bottom  = grid[index(currentWay.lastPeek().i ,currentWay.lastPeek().j+1)];
  
      if(!bottom.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = bottom;
      }
      
    }

    if(!currentWay.lastPeek().walls[1] && currentWay.lastPeek().i < cols-1){
      wallCounter++;
      var right   = grid[index(currentWay.lastPeek().i+1 ,currentWay.lastPeek().j)];
  
      if(!right.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = right;
      }
      
    }

    if(!currentWay.lastPeek().walls[0] && currentWay.lastPeek().j > 0) {
      wallCounter++;
      var top     = grid[index(currentWay.lastPeek().i ,currentWay.lastPeek().j-1)];
      if(!top.wayVisited){
        counter++;
        if(!(counter > 1))
        traceNode = top;
      }
      
    }
   
    
    
    if(!currentWay.lastPeek().walls[3] && currentWay.lastPeek().i > 0) {
      wallCounter++;
  
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
  function checkMazeDone(){
    var counter =0;
    for(var i =0;i<grid.length;i++){
      if(grid[i].visited)
      counter++;
    }
    if(counter === grid.length)
    return true;
    else 
    return false;
  }