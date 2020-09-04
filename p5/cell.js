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
      if(this.frontier){
        noStroke();
        fill(0,255,0,300);
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
    this.markAsFrontier = function(){
  
      var top     = grid[index(i ,j-2)];
      var right   = grid[index(i+2 ,j)];
      var bottom  = grid[index(i ,j+2)];
      var left    = grid[index(i-2 ,j)];
  
      if(top &&  !top.maze && !top.frontier && top.wall){
        top.frontier = true;
        frontierNodes.push(top);
      }
      if(right &&  !right.maze && !right.frontier && right.wall){
        right.frontier = true;
        frontierNodes.push(right);
      }
      if( bottom &&  !bottom.maze && !bottom.frontier && bottom.wall){
        bottom.frontier = true;
        frontierNodes.push(bottom);
      }
      if(left &&  !left.maze && !left.frontier && left.wall){
        left.frontier = true;
        frontierNodes.push(left);
      }
  
      
    }
    this.randomFrontier = function(){
      if(frontierNodes.length > 0){
        var r = floor(random(0,frontierNodes.length));
      
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

      if(top && top.maze){
        mazeNodes.push(grid[index(i,j-1)]);        
      }
      else if(right && right.maze){
        mazeNodes.push(grid[index(i+1,j)]);
      }
      else if(bottom&& bottom.maze){
        mazeNodes.push(grid[index(i,j+1)]);
      }
      else if(left && left.maze){
        mazeNodes.push(grid[index(i-1,j)]);
      }

      if(mazeNodes.length > 0){
        var r = floor(random(0,mazeNodes.length));

        mazeNodes[r].wall = false;
        mazeNodes[r].maze = true;
      }
    }
  }