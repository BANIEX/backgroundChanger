let color = ["blue", "green", "yellow", "orange", 'grey', 'black', 'purple', 'white','red', 'pink', 'rgb(234,23,35)', 'silver'];
let number = 0

document.getElementsByClassName("bottom")[0].addEventListener("click", function(){
    let up = document.getElementsByClassName("top")[0];

    if (number < color.length){
        up.style.backgroundColor = color[number];
        number += 1;
    }
    else{
        number = 0
    }
  
})