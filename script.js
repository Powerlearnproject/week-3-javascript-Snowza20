
let name = "Sarah Williams";
let age = 30;
let isAdmin = true;

console.log(`Name: ${name}, Age: ${age}, Is Admin: ${isAdmin}`);


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}


const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const divideBtn = document.getElementById("divide-btn");
const resultPara = document.getElementById("result");
const myChartCanvas = document.getElementById("myChart");


addBtn.addEventListener("click", () => {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    const result = add(num1, num2);
    resultPara.textContent = `Result: ${result}`;
});

subtractBtn.addEventListener("click", () => {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    const result = subtract(num1, num2);
    resultPara.textContent = `Result: ${result}`;
});

multiplyBtn.addEventListener("click", () => {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    const result = multiply(num1, num2);
    resultPara.textContent = `Result: ${result}`;
});

divideBtn.addEventListener("click", () => {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    const result = divide(num1, num2);
    resultPara.textContent = `Result: ${result}`;
});


const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{
        label: "Laptops shipment over 5 months",
        data: [100, 200, 300, 400, 500],
        backgroundColor: "black(255, 99, 132, 0.2)",
        borderColor: "black(255, 99, 132, 1)",
        borderWidth: 1
    }]
};

const chartConfig = {
    type: "bar",
    data: chartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const myChart = new Chart(myChartCanvas, chartConfig);
