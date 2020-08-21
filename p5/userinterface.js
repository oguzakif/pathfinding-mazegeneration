var button;
var solution = true;
var buttonh;
var buttonw= buttonh*(2.5);

var buttonDistance;

var context = "Change the visibility of solution.";

var second=0;
function showInterface(){
    var title = createElement('h1',"Maze Generation and PathFinding");
    if(canvasx === 1000)
    title.style('color:#F9eee2; font-size:50px');

    else 
    title.style('color:#F9eee2; font-size:25px');

    title.center();

    showButton();
}
function showButton(){
    button = createButton(context);
    button.size(buttonw,buttonh);
    button.center();
    if(canvasx === 1000)
    button.style('margin-top:800px');

    else
    button.style('margin-top:600px');

}

function showTheSolution(){
    solution = !solution;
}
function showStatistics(){
    var statistics = "Solution Time: "+second+"\n"+
    "Treaths: "+treaths;
    if(canvasx === 400){
        text(statistics,10,canvasy+buttonDistance);
    }

    else{
        text(statistics,canvasx+buttonDistance,0);
    }
    second++;
}
