function loadProblem(problemName) {
    document.getElementById('problem-description').innerText = 'Solving: ' + problemName;
}

function runCode() {
    let code = document.getElementById('code').value;
    let outputElement = document.getElementById('output');
    
    try {
        let result = eval(code); 
        outputElement.innerText = 'Output:\n' + result;
    } catch (error) {
        outputElement.innerText = 'Error:\n' + error;
    }
}