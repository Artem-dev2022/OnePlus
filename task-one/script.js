const tableBody = document.querySelector('.table__body');

async function getData(){
    /// используемый API ограничен количеством вызовов в минуту
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en').then((data) => data.json());
    console.log(data);

    let counter = 1;

    for (let i in data) {
        
        let item = data[i];
        const tableRow = document.createElement('tr');
        const tableColumnId = document.createElement('td');
        tableColumnId.textContent = item.id;
        const tableColumnSymbol = document.createElement('td');
        tableColumnSymbol.textContent = item.symbol;
        const tableColumnName = document.createElement('td');
        tableColumnName.textContent = item.name;

        tableRow.append(tableColumnId, tableColumnSymbol, tableColumnName);
        tableBody.append(tableRow)

        if (counter <=5) {
            tableRow.style.backgroundColor = 'blue';
            counter++;
        }

        if (item.symbol == 'usdt') {
            tableRow.style.backgroundColor = 'green';
        }
    }
}

getData()