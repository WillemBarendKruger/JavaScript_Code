// Calling HTML elements
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");


//Functions
const checkInput = () => {

    // Ease of us
    const input = parseInt(numberInput.value); //Use Number() if convertion isn't working
    // console.log(numberInput.value+ " " + typeof(numberInput.value));

    // Clear div #output
    result.innerText = "";

    if (numberInput.value === "") {
        result.innerText = "Please enter a valid number";
    }
    else if(input <= -1){
        result.innerText = "Please enter a number greater than or equal to 1";
    }
    else if (input > 3999) {
        result.innerText = "Please enter a number less than or equal to 3999";
    }
    else{
        result.innerText = convertToRoman(input);
    }
}
    //input converter
const convertToRoman = (number) => {
    return "I"
    .repeat(number)
    .replace(/I{5}/g, 'V')
    .replace(/V{2}/g, 'X')
    .replace(/X{5}/g, 'L')
    .replace(/L{2}/g, 'C')
    .replace(/C{5}/g, 'D')
    .replace(/D{2}/g, 'M')
    .replace(/DC{4}/g, 'CM')
    .replace(/C{4}/g, 'CD')
    .replace(/LX{4}/g, 'XC')
    .replace(/X{4}/g, 'XL')
    .replace(/VI{4}/g, 'IX')
    .replace(/I{4}/g, 'IV')
}

//Event Listeners
convertBtn.addEventListener("click", checkInput)