const heading = document.getElementById('heading');
const bmiOutput = document.getElementById('bmi-output');
const message = document.getElementById('message')
const error = document.querySelectorAll('#error');
const weightError = document.getElementById('weight-error');
const heightError = document.getElementById('height-error');


function calculate() {
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;

    if (height === "" || height === 0 || weight === "" || weight === 0) {
        if (height === "" || height === 0) {
            heightError.innerText = "*Please enter a valid Height";
            weightError.innerText = "";

        } else if (weight === "" || weight === 0) {
            weightError.innerText = "*Please enter a valid Weight";
            heightError.innerText = "";
        }
    } else {
        heightError.innerText = "";
        weightError.innerText = "";
        let bmi = weight / (height * height);
        heading.innerText = "Your BMI is:"
        bmiOutput.innerText = bmi.toFixed(2);
        if (bmi <= 18.5) {
            message.innerText = "You are underweight!";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            message.innerText = "You are healthy";
        } else if (bmi >= 25 && bmi <= 29.9) {
            message.innerText = "You are overweight!";
        } else if (bmi >= 30 && bmi <= 39.9) {
            message.innerText = "You are obese";
        } else {
            message.innerText = "You are severely obese";
        }
    }

    if ((height === "" || height === 0) && (weight === "" || weight === 0)) {
        heightError.innerText = "*Please enter a valid Height";
        weightError.innerText = "*Please enter a valid Weight";
    }
}


function reset() {
    window.location.reload();
}

