
async function getExchangeRates() {
    const url = 'https://api.exchangerate-api.com/v4/latest/USD'
    let response = await fetch(url);
    let data = await response.json();
    /*document.getElementById('response').innerHTML = data['value'];*/
    return data['rates']
}

async function plotData() {
    const dta = await getExchangeRates()
    console.log(Object.keys(dta).slice(0, 5))
    console.log(Object.values(dta).slice(0, 5))

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(dta).slice(0, 20),
            datasets: [{
                label: 'USD exchange rate',
                data: Object.values(dta).slice(0, 20)
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}

plotData()


