import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  didInsertElement(){
    const crypto = get(this, 'crypto'),
          option = get(this, 'option'),
          data = crypto[option],
          ctx = document.querySelector('#priceChart').getContext('2d'),
          myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                options: [option],
                datasets: [{
                    label: option,
                    data: [data],
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
    const crypto = get(this, 'crypto'),
          chart = get(this, 'chart'),
          option = get(this, 'option'),
          data = crypto[option];

    set(this, 'templateLabel', option);
    set(this, 'templateData', data);
    // TO DO: Object with nice labels
    chart.data.labels[0] = option;
    chart.data.datasets.forEach(dataset => {
        dataset.label = `${option}`;
        dataset.data[0] = data;
    });
    chart.update();
  },
});
