import * as Chart from 'chart.js';

interface ViewsData {
  timestamp: string;
  count: number;
  uniques: number;
  npm_downloads?: number;
}

interface Views {
  count: number;
  uniques: number;
  views: ViewsData[];
}

interface Repo {
  name: string;
  stars: number;
  npm_downloads: number;
  language: string;
  forks: number;
  views: Views;
}

interface Stats {
  views: number;
  stars: number;
  npm_downloads: number;
  repos: Repo[];
  mainChartData: any;
}

const onLoad = () => {

  fetch('assets/stats.json')
    .then((response: Response) => response.json())
    .then((response: Stats) => {

    response.mainChartData.options = {
      responsive: true,
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'rgba(255,255,255, 0.2)',
            zeroLineColor: 'rgba(255,255,255, 0.5)'
          }
        }],
        yAxes: [{
          gridLines: {
            color: 'rgba(255,255,255, 0.15)',
            zeroLineColor: 'rgba(255,255,255, 0.5)'
          }
        }]
      },
      elements: {
        line: {
          tension: 0
        }
      },
      legend: {
        labels: {
          fontColor: 'white'
        }
      },

    };

      const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('.main-chart-container canvas');
      canvas.height = 300;
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
      let _chart = new Chart(ctx, response.mainChartData);

      window['c'] = _chart;

      console.log('Response is ', response);
    })
    .catch((e: any) => {
      console.log('Error with fetching stats', e);
    });

};

document.addEventListener('DOMContentLoaded', onLoad);
//
// console.log('lol');