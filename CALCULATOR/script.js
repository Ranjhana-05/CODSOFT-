let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        let expression = outputScreen.value.replace(/(\d+)%/g, function(_, number) {
            return number / 100;
        });

        outputScreen.value = eval(expression);
    } catch (err) {
        alert("Invalid");
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}


document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (/\d/.test(key)) {
        display(key);
    } else if (key === '.') {
        display('.');
    } else if (key === '+') {
        display('+');
    } else if (key === '-') {
        display('-');
    } else if (key === '*') {
        display('*');
    } else if (key === '/') {
        display('/');
    } else if (key === '%') {
        display('%');
    } else if (key === 'Enter') {
        event.preventDefault(); 
        Calculate();
    } else if (key === 'Backspace') {
        del();
    } else if (key === 'Escape') {
        Clear();
    }
});






