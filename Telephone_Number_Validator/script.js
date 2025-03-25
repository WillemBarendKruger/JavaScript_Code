// Getting the HTML elements
const UserInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

//Functions

//check input
const validateInput = () => {
    //debugging
    const input = UserInput.value
    console.log(input, typeof(input))
    

    const regex = /^\s*(?:\+?1\s*(?:[.-]\s*)?)?(?:\((\d{3})\)|(\d{3}))[-. ]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

    const test = regex.test(input)

    if(input === ""){
        alert("Please provide a phone number");
        
    }
    else if(!test){
        result.innerText = `Invalid US number: ${input}`
    }
    else{
        result.innerText = `Valid US number: ${input}`
    }
}

//clear the div element
const clearInput = () => result.innerText = "";

// Event Listeners
checkBtn.addEventListener("click", validateInput);
clearBtn.addEventListener("click", clearInput);