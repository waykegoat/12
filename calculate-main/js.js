function addition() {
    const num1 = parseFloat(document.getElementById('numberone').value);
    const num2 = parseFloat(document.getElementById('numbertwo').value);
    const result = num1 + num2;
    document.getElementById('result').textContent = "Результат: " + result;
}