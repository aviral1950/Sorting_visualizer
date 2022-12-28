async function bubble() {
    console.log('In bubbe()');
    const element = document.querySelectorAll(".bar");
    for(let i = 0; i < element.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < element.length-i-1; j++){
            console.log('In jth loop');
            element[j].style.background = 'blue';
            element[j+1].style.background = 'blue';
            if(parseInt(element[j].style.height) > parseInt(element[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(element[j], element[j+1]);
            }
            element[j].style.background = 'greenyellow';
            element[j+1].style.background = 'greenyellow';
        }
        element[element.length-1-i].style.background = 'yellow';
    }
    element[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".btn_bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});