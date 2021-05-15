"use strict";

const container_div = document.getElementById("container");
const resetButton = document.getElementById("reset");
main();

function main(){
    createDivGrid(16);
    resetButton.addEventListener('click', reset);
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
    let gridDiv = document.querySelectorAll(".innerDiv");
    gridDiv.forEach(function(div){
        div.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = "black";
        })
    })
}

function reset(){
    while(container_div.firstChild){
        container_div.removeChild(container_div.firstChild);
    }
    let input = prompt("What size grid would you like(between 1-100)?");
    if(input > 100){
        createDivGrid(100);
    }
    else{
        createDivGrid(input);
    }
}


