'use strict';

const sideLengthInput = document.querySelector('#sideLength > input');
const areaInput = document.querySelector('#showArea > input');



function areaOfASquare(){
    const sideLength = parseFloat(sideLengthInput.value);
    const area = sideLength * sideLength;

    areaInput.value = area;
    
}

function sideLengthOfASquare(){
    const area = parseFloat(areaInput.value);
    const sideLength = Math.sqrt(area);

    sideLengthInput.value = sideLength;
}

function main(){
    sideLengthInput.addEventListener('input' , areaOfASquare );
    areaInput.addEventListener('input' , sideLengthOfASquare);
}

main();