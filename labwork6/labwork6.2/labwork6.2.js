document.addEventListener('DOMContentLoaded', function () {
    // Function to perform addition
    function Add() {
        const num1 = parseFloat(document.getElementById("num1").value) || 0;
        const num2 = parseFloat(document.getElementById("num2").value) || 0;
        const result = num1 + num2;
        document.getElementById("num3").value = result;
    }

    // Function to perform subtraction
    function Subtract() {
        const num1 = parseFloat(document.getElementById("num1").value) || 0;
        const num2 = parseFloat(document.getElementById("num2").value) || 0;
        const result = num1 - num2;
        document.getElementById("num3").value = result;
    }

    // Function to perform multiplication
    function Multiply() {
        const num1 = parseFloat(document.getElementById("num1").value) || 0;
        const num2 = parseFloat(document.getElementById("num2").value) || 0;
        const result = num1 * num2;
        document.getElementById("num3").value = result;
    }

    // Function to perform division
    function Divide() {
        const num1 = parseFloat(document.getElementById("num1").value) || 0;
        const num2 = parseFloat(document.getElementById("num2").value) || 1; // Avoid division by zero
        const result = num1 / num2;
        document.getElementById("num3").value = result;
    }

    // Attach functions to the click events of the buttons
    document.querySelector('.numbers button:nth-child(1)').addEventListener('click', Add);
    document.querySelector('.numbers button:nth-child(2)').addEventListener('click', Subtract);
    document.querySelector('.numbers button:nth-child(3)').addEventListener('click', Multiply);
    document.querySelector('.numbers button:nth-child(4)').addEventListener('click', Divide);
});
