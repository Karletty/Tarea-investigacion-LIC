const SetData = (labels, spents, gains, title) => {
    const dataCategory = {
        labels: labels,
        datasets: [{
            label: 'Gastos',
            data: spents,
            backgroundColor: '#ef476e'
        },
        {
            label: 'Ganancias',
            data: gains,
            backgroundColor: '#06d6a0'
        }]
    }

    const configCategory = {
        type: 'bar',
        data: dataCategory,
        options: {
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: title
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            },
        },
    };
    return configCategory;
}

const data = {
    names: ["Trabajo", "Comida", "Educación", "Salidas", "Servicios"],
    spents: [0, 50, 75, 10, 10],
    gains: [200, 0, 0, 0, 0]
}

const $$ = el => document.getElementById(el);

const CreateCategoriesChart = () => {
    const chartCategories = new Chart($$('category-balance'), SetData(data.names, data.spents, data.gains, 'Balance por categorías'));
};

CreateCategoriesChart();