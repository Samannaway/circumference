let inputBtn = document.getElementById("input")
let radius = document.getElementById("number-input")
let PI = 22/7
let PI2 = Math.PI
let circumference;
let output = document.getElementById("output");

inputBtn.addEventListener("click",()=>{

    radius = parseInt(radius.value)
    circumference = 2*(radius*PI)
    let circumference2 = 2*(radius*PI2)

    if ( Number.isInteger(radius/4) == true) {
        output.innerHTML = circumference2
    }else{
        output.innerHTML = circumference
    }

    console.log(circumference);
    console.log(radius);
    radius=document.getElementById("number-input")
})