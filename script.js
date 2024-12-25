window.onload = function() {
    var income = 0;
    var expenses = 0;
    var savings = 0;

    var ctx = document.getElementById('progressChart').getContext('2d');
    
    // Initial data for the chart
    var chartData = {
        labels: ['Income', 'Expenses', 'Savings'],
        datasets: [{
            label: 'Progress Overview',
            data: [income, expenses, savings], // Default values (you can change these if needed)
            backgroundColor: [
                '#4caf50', // Income color (green)
                '#f44336', // Expenses color (red)
                '#2196f3'  // Savings color (blue)
            ]
        }]
    };

    var progressChart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Function to update the chart with user inputs
    document.getElementById('addIncome').addEventListener('click', function() {
        var incomeInput = parseFloat(document.getElementById('income').value) || 0;
        income += incomeInput;
        updateTotalBalance();
        progressChart.data.datasets[0].data[0] = income;
        progressChart.update(); // Re-render the chart with updated data
        
        // Reset the input field after adding the income
        document.getElementById('income').value = ''; // Highlight this line to reset the input field

    });

    document.getElementById('addExpenses').addEventListener('click', function() {
        var expensesInput = parseFloat(document.getElementById('expenses').value) || 0;
        expenses += expensesInput;
        updateTotalBalance();
        progressChart.data.datasets[0].data[1] = expenses;
        progressChart.update(); // Re-render the chart with updated data
    });

    document.getElementById('updateChart').addEventListener('click', function() {
        var savingsInput = parseFloat(document.getElementById('savings').value) || 0;
        savings += savingsInput;
        updateTotalBalance();
        progressChart.data.datasets[0].data[2] = savings;
        progressChart.update(); // Re-render the chart with updated data
    });

    // Function to update the total balance with ₹ symbol
    function updateTotalBalance() {
        var totalBalance = income - expenses + savings;
        document.getElementById('totalBalance').innerText = totalBalance.toFixed(2); // Remove $ and add ₹
    }
};
