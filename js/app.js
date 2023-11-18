let incrementBtn = document.querySelector("#increment");
let decrementBtn = document.querySelector("#decrement");

let input= document.querySelector("input");

incrementBtn.addEventListener('click',incrementFn);

function incrementFn(){
    input.value++;
}

decrementBtn.addEventListener('click',decrementFn);
function decrementFn(){
    if(input.value>1){
        input.value--;
    }
}
