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
     
            for(var i=0;i<lastPoint;i++){
                if(i === 0)
                this.elements[i].highlightStart();

                else if(i === lastPoint-1)
                this.elements[i].highlightFinish();

                else
                this.elements[i].highlight();
            }
    }
    this.showDirectly = function(){
     
            for(var i=0;i<this.size();i++){
               
                if(i === 0)
                this.elements[i].highlightStart();

                else if(i === this.size()-1)
                this.elements[i].highlightFinish();

                else
                this.elements[i].highlight();
            }
    }
    this.show = function (){
        
        for(var i=0;i<this.size();i++){
            if(i === 0)
            this.elements[i].highlightStart();

            else if(i === this.size()-1)
            this.elements[i].highlightFinish();

            else
            this.elements[i].highlight();
        }
    }
}