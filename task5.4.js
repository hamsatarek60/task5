let calculation = localStorage.getItem('calculation') || " ";
    
        function updaterCalculation(value) {
            calculation += value;
            printCalculation();
            localStorage.setItem('calculation', calculation);
        }

        function printCalculation()  {
        document.querySelector('.js-calculation')
        .innerHTML = calculation;;
        }