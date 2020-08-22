function Cell(i, j){
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.walls = [true,true,true,true]; //top,right,bottom,left
    this.visited = false;
    this.wayVisited = false;
    this.finish = false;

    this.highlight = function(){
      var x = this.i*size;
      var y = this.j*size;
      noStroke();
      fill(153,55,37,300);

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
      stroke(23,29,75,300);
      if(this.walls[0])
      line(x,y,x+size,y);
  
      if(this.walls[1])
      line(x+size,y,x+size,y+size);
  
      if(this.walls[2])
      line(x+size,y+size,x,y+size);
  
      if(this.walls[3])
      line(x,y+size,x,y);
  
      if(this.visited){
        noStroke();
        fill(249,238,226,300);

        rect(x,y,size,size);
      }
      if(this.finish) {
        noStroke();
        fill(255,0,0,300);
        rect(x,y,size,size);
      }
    }
  
    this.checkNeighbors = function(){
      var neighbors = [];
  
      var top     = grid[index(i ,j-1)];
      var right   = grid[index(i+1 ,j)];
      var bottom  = grid[index(i ,j+1)];
      var left    = grid[index(i-1 ,j)];
  
      if(top && !top.visited){
        neighbors.push(top);
      }
      if(right && !right.visited){
        neighbors.push(right);
      }
      if(bottom && !bottom.visited){
        neighbors.push(bottom);
      }
      if(left && !left.visited){
        neighbors.push(left);
      }
  
      if(neighbors.length > 0){
        var r = floor(random(0,neighbors.length));
        return neighbors[r];
      }
      else{
        return undefined;
      }
    }
    
    this.isTopNeighborVisited = function(){
      var top     = grid[index(i ,j-1)];
      
      if(top.isVisited)
      return true;
      else 
      return false;
    }
    this.isRightNeighborVisited = function(){
      var right   = grid[index(i+1 ,j)];
      if(right.isVisited)
      return true;
      else 
      return false;
    }
    this.isBottomNeighborVisited = function(){
      var bottom  = grid[index(i ,j+1)];

      if(bottom.isVisited)
      return true;
      else 
      return false;
    }
    this.isLeftNeighborVisited = function(){
      var left    = grid[index(i-1 ,j)];

      if(left.isVisited)
      return true;
      else 
      return false;
    }
  
  }