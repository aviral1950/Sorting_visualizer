function swap(l1, l2) {
    console.log('In swap()');
    
    let temp = l1.style.height;
    l1.style.height = l2.style.height;
    l2.style.height = temp;
    
}

function disableSortingBtn(){
    document.querySelector(".btn_bubbleSort").disabled = true;
   
}

function enableSortingBtn(){
    document.querySelector(".btn_bubbleSort").disabled = false;
}
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}


function disableNewArrayBtn(){
    document.querySelector(".btn_newArray").disabled = true;
}

function enableNewArrayBtn(){
    document.querySelector(".btn_newArray").disabled = false;
}


function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let arraySize = document.querySelector('#arr_sz');


arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});


let delay = 220;


let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 280 - parseInt(delayElement.value);
});

let array = [];

createNewArray();


function createNewArray(noOfBars = 60) {
    
    deleteChild();
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".btn_newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});