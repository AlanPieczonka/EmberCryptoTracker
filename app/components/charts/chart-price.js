import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  didInsertElement(){
    const price = get(this, 'crypto').price_usd,
          ctx = document.querySelector('#priceChart').getContext('2d'),
          myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Price"],
                datasets: [{
                    label: `USD Price ${price}`,
                    data: [price],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        set(this, 'chart', myChart);
  },
  didUpdateAttrs(){
    const attributes = get(this, 'crypto'),
          chart = get(this, 'chart'),
          price = attributes.price_usd;
          
    chart.data.datasets.forEach((dataset) => {
        dataset.label = `USD Price ${price}`;
        dataset.data[0] = price;
    });
    chart.update();
  },
});
