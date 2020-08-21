function generateMaze(){
      if(!isMazeDone){
        current.visited = true;
        current.highlight();
          //STEP 1 
        var next = current.checkNeighbors();
        if(next){
          next.visited = true;
          
          //STEP 2 
          stack.push(current);
    
          //STEP 3
          removeWalls(current ,next);
          
          //STEP 4
          current = next;
        }
        else if(stack.length > 0){
          current = stack.pop();
        }
        isMazeDone = checkMazeDone();
      }
}
function removeWalls(a,b){
    var x = a.i - b.i;
    if(x === 1){
      a.walls[3] = false;
      b.walls[1] = false;
    }
    else if(x === -1){
      a.walls[1] = false;
      b.walls[3] = false;
    }
    var y = a.j - b.j;
    if(y === 1){
      a.walls[0] = false;
      b.walls[2] = false;
    }
    else if(y === -1){
      a.walls[2] = false;
      b.walls[0] = false;
    }
  }