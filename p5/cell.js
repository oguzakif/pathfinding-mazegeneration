function Cell(i, j){
    this.i = i;
    this.j = j;
    this.x = i*size;
    this.y = j*size;
    this.maze = false;
    this.wall = true;
    this.frontier = false;
    this.wayVisited = false;
    this.finish = false;
    this.start = false;
    this.walls = [true,true,true,true];  //top,right,bottom,left

    this.highlight = function(){
      var x = this.i*size;
      var y = this.j*size;
      noStroke();
      fill(221,93,0,300);

      rect(x,y,size,size);
    }
    this.highlightStart = function(){
      var x = this.i*size;
      var y = this.j*size;
      noStroke();
      fill(0,0,255,200);
      rect(x,y,size,size);
    }
    this.highlightFinish = function(){
      var x = this.i*size;
      var y = this.j*size;
      noStroke();
      fill(0,255,0,200);
      rect(x,y,size,size);
    }
    this.show = function(){
      var x = this.i*size;
      var y = this.j*size;
      if(this.frontier){
        noStroke();
        fill(255,0,255,300);
        rect(x,y,size,size);
      }
      if(this.maze){
        noStroke();
        fill(242,241,211,300);
        rect(x,y,size,size);
      }
      if(this.wall){
        noStroke();
        fill(0,0,0,300);
        rect(x,y,size,size);
      }
      
      if(this.wayVisited && solution){
        noStroke();
        fill(68,214,233,300);
        rect(x,y,size,size);
      }
      if(this.finish) {
        noStroke();
        fill(255,0,0,300);
        rect(x,y,size,size);
      }
      if(this.start){
        noStroke();
        fill(0,0,255,300);
        rect(x,y,size,size);
      }
    }
    this.searchWalls = function (xaxis,yaxis){
      if(this.i+xaxis < 0 || this.j+yaxis < 0  || this.i+xaxis > cols-1 || this.j+yaxis > rows-1 || grid[index(this.i+xaxis,this.j+yaxis)].wall === true)
      return true;

      else
      return false;
    }
    this.markAsFrontier = function(){
  
      var top     = grid[index(i ,j-2)];
      var right   = grid[index(i+2 ,j)];
      var bottom  = grid[index(i ,j+2)];
      var left    = grid[index(i-2 ,j)];
  
      if(top &&  !top.maze && !top.frontier && top.wall){
        top.frontier = true;
        top.wall = false;
        frontierNodes.push(top);
      }
      if(right &&  !right.maze && !right.frontier && right.wall){
        right.frontier = true;
        right.wall = false;
        frontierNodes.push(right);
      }
      if( bottom &&  !bottom.maze && !bottom.frontier && bottom.wall){
        bottom.frontier = true;
        bottom.wall = false;
        frontierNodes.push(bottom);
      }
      if(left &&  !left.maze && !left.frontier && left.wall){
        left.frontier = true;
        left.wall = false;
        frontierNodes.push(left);
      }
  
      
    }
    this.randomFrontier = function(){
      if(frontierNodes.length > 0){
        var r = floor(random(0,frontierNodes.length));
        frontierNodes[r].frontier = false;
        return frontierNodes[r];
      }
      else{
        return undefined;
      }
    }
    this.randomMazeNode = function(){
      var top     = grid[index(i ,j-2)];
      var right   = grid[index(i+2 ,j)];
      var bottom  = grid[index(i ,j+2)];
      var left    = grid[index(i-2 ,j)];

      var mazeNodes = [];

      if(top && top.maze && grid[index(i,j-1)].wall){
        mazeNodes.push(grid[index(i,j-1)]);   
        grid[index(i,j-1)].wall = false;    
         
      }
      else if(right && right.maze && grid[index(i+1,j)].wall){
        grid[index(i+1,j)].wall = false;
        mazeNodes.push(grid[index(i+1,j)]);
        mazeNodes.push(grid[index(i+1,j)]);
        mazeNodes.push(grid[index(i+1,j)]);
      }
      else if(bottom&& bottom.maze && grid[index(i,j+1)].wall){
        grid[index(i,j+1)].wall = false;
        mazeNodes.push(grid[index(i,j+1)]);
      }
      else if(left && left.maze && grid[index(i-1,j)].wall){
        grid[index(i-1,j)].wall = false;
        mazeNodes.push(grid[index(i-1,j)]);
        mazeNodes.push(grid[index(i-1,j)]);
        mazeNodes.push(grid[index(i-1,j)]);
      }

      if(mazeNodes.length > 0){
        var r = floor(random(0,mazeNodes.length));
        mazeNodes[r].frontier = false;
        mazeNodes[r].maze = true;
      }
    }
  }