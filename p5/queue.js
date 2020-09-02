function Queue() {
    this.elements = [];
    
    this.enqueue = function (e) {
        this.elements.push(e);
     };

     this.dequeue = function () {
        return this.elements.shift();
    };
    this.lastDequeue = function() {
        return this.elements.pop();
    }

    this.isEmpty = function () {
        return this.elements.length == 0; 
    };

    this.peek = function () {
        return !this.isEmpty() ? this.elements[0] : undefined;
    };

    this.lastPeek = function () {
        return !this.isEmpty() ? this.elements[this.size()-1] : undefined;
    };

    this.size = function() {
        return this.elements.length;
    }

    this.showLine = function(lastPoint){
        var x;
        var y;
            for(var i=0;i<lastPoint;i++){
                x = this.elements[i].i*size;
                y = this.elements[i].j*size;
                stroke(23,29,75,300);
                if(this.elements[i].walls[0])
                line(x,y,x+size,y);
            
                if(this.elements[i].walls[1])
                line(x+size,y,x+size,y+size);
            
                if(this.elements[i].walls[2])
                line(x+size,y+size,x,y+size);
            
                if(this.elements[i].walls[3])
                line(x,y+size,x,y);

                if(i === 0)
                this.elements[i].highlightStart();

                else if(i === lastPoint-1)
                this.elements[i].highlightFinish();

                else
                this.elements[i].highlight();
            }
    }
    this.showDirectly = function(){
        var x;
        var y;
            for(var i=0;i<this.size();i++){
                x = this.elements[i].i*size;
                y = this.elements[i].j*size;
                stroke(23,29,75,300);
                if(this.elements[i].walls[0])
                line(x,y,x+size,y);
            
                if(this.elements[i].walls[1])
                line(x+size,y,x+size,y+size);
            
                if(this.elements[i].walls[2])
                line(x+size,y+size,x,y+size);
            
                if(this.elements[i].walls[3])
                line(x,y+size,x,y);

                if(i === 0)
                this.elements[i].highlightStart();

                else if(i === this.size()-1)
                this.elements[i].highlightFinish();

                else
                this.elements[i].highlight();
            }
    }
}