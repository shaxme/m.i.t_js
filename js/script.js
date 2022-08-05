var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elSelect = document.querySelector(".select");
var elText = document.querySelector(".t-answer")


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var inputValue = (elInput.value);
  var selectValue = (elSelect.value);

  if (inputValue >= 70 && inputValue <= 85) {
    elText.textContent = "You entered into a super contract";
  }
  else if (inputValue >= 86 && inputValue <= 100) {
    elText.textContent = "You entered into a contract";
  }
  else if (inputValue >= 101 && inputValue <= 130) {
    elText.textContent = "You're on a budget";
  }
  else if (inputValue > 130) {
    elText.textContent = "Maximum score is 130";
  }
  else if (inputValue < 0) {
    elText.textContent = "Enter a negative number";
  }
  else if (isNaN(inputValue)) {
    elText.textContent = "Enter a number";
  }
  else {
    elText.textContent = "You failed :(";
  }
  
  console.log(`${inputValue}${selectValue}`)
  }
)


