"use strict";

const container_div = document.getElementById("container");
const gridDiv = document.querySelectorAll("#container div");
main();

function main(){
    createDivGrid(16);
}

function createDivGrid(num){ 
    var dimensions = 960/num;
    container_div.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
    for(var rows = 0; rows < num; rows++){
        for(var cols = 0; cols < num; cols++){
            var div = document.createElement('div');
            container_div.appendChild(div);
            div.className = "innerDiv";
        }
    }
    gridDiv.forEach(function(e){
        e.style.width = dimensions + "px";
        e.style.height = dimensions + "px";
    })
}
