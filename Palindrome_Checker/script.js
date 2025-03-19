const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkInputEntered = () => {
  if (textInput.value === ""){
    alert("Please input a value");
  }
  else{
    result.innerText = isPalindrome();
  }
  
}

const isPalindrome = () => {
  
  let str = textInput.value ;
  const cleanInput = str.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
  const reverseInput = cleanInput.split("").reverse().join("");

  if(cleanInput === reverseInput){
    return `${textInput.value} is a palindrome`;
  }
  else{
    return `${textInput.value} is not a palindrome`
  }
}