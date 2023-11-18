let incrementBtn = document.querySelector("#increment");
let decrementBtn = document.querySelector("#decrement");
let input= document.querySelector("input");

incrementBtn.addEventListener('click',function(){
    input.value++;
});


decrementBtn.addEventListener('click',function(){
    if(input.value>1){
        input.value--;
    }
});
document.querySelector("input").addEventListener("input",range);

function range(){
    let rangeVal= document.querySelector("input").value;

    document.querySelector('p').innerText=rangeVal;
}

setInterval(function(){
    let color1 = Math.floor(Math.random() *255);
    let color2 = Math.floor(Math.random() *255);
    let color3 = Math.floor(Math.random() *255);

    console.log(color1, color2, color3);
    document.body.style.background = `linear-gradient(rgb(${color1}, ${color2}, ${color3}), rgb(${color1}, ${color2}, ${color3}))`;
},1000);