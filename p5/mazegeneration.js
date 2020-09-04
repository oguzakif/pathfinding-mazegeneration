function mazeController(){
  while(!isMazeDone)
  generateMaze()
  
}

function generateMaze(){
    if(!isMazeDone)
    {
      current.maze = true;
      current.wall = false;
      current.highlight();
      
      //STEP 1 FIND FRONTIERS
      current.markAsFrontier();

      //STEP 2 SPECIFY NEW CURRENT 
      current = current.randomFrontier();

      //STEP 3 REMOVE CURRENT FROM FRONTIERNODES LIST
      frontierNodes = removeFromList(frontierNodes, current);
      current.frontier = false;

      //STEP 4 CONNECT TO RANDOM MAZE NODE
      current.randomMazeNode();
     
      if(!(frontierNodes.length > 0))
      isMazeDone = true;
    }
}
  function removeFromList(list,obj){
    var index = list.indexOf(obj);
    if(index > -1)
    list.splice(index,1);

    return list;
  }