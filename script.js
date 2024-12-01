const calculateBtn = document.getElementById('calculate-btn');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const bmiValue = document.getElementById('bmi-value');
const status = document.getElementById('status');

calculateBtn.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert height from cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height!');
        return;
    }

    // BMI calculation
    const bmi = weight / (height * height);

    bmiValue.textContent = bmi.toFixed(2);

    // Determine BMI category
    let bmiStatus = '';
    if (bmi < 18.5) {
        bmiStatus = 'Underweight';
        status.classList.remove('normal', 'overweight', 'obese');
        status.classList.add('underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiStatus = 'Normal weight';
        status.classList.remove('underweight', 'overweight', 'obese');
        status.classList.add('normal');
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiStatus = 'Overweight';
        status.classList.remove('underweight', 'normal', 'obese');
        status.classList.add('overweight');
    } else {
        bmiStatus = 'Obese';
        status.classList.remove('underweight', 'normal', 'overweight');
        status.classList.add('obese');
    }

    status.textContent = `Status: ${bmiStatus}`;
});
