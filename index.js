const textbox = document.getElementById("textbox")
const f_to_c = document.getElementById("f_to_c")
const c_to_f = document.getElementById("c_to_f")
const result = document.getElementById("result")
let temp;

function convert(){

    
    if(c_to_f.checked){

       
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F"

    }
    else if(f_to_c.checked){

        result.textContent = "you selected to Celsius"
        temp = Number(textbox.value);
        temp = (temp-32) * (5/9) ;
        result.textContent = temp.toFixed(1) + "°C"

    }
    else{
        result.textContent = "select a unit"
    }

} 