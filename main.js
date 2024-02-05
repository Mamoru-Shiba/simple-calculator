document.addEventListener("DOMContentLoaded", function(){    
    var input = document.getElementById('calculator-input');
    var currentInput = '0';
    var currentOperator = null;
    var prevInput = null;

    function handleNumberClick(number){
        if (currentInput === '0' || currentInput === '-0'){
            currentInput = number;
        } else {
            currentInput += number;
        }
        input.value = currentInput;
    }

    for (var i = 0; i <= 8; i++){
        var numberButton = document.getElementById(i);
        numberButton.addEventListener("click", function(event){
            handleNumberClick(event.target.textContent);
        })
    }
    // キーボード入力を無効にする
    input.addEventListener("keydown", function(event){
        event.preventDefault();
    });
    
});
