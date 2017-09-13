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
              color: 'rgba(0,0,0, 0.1)',
              zeroLineColor: 'rgba(0,0,0, 0.5)'
            }
          }],
          yAxes: [{
            gridLines: {
              color: 'rgba(0,0,0, 0.05)',
              zeroLineColor: 'rgba(0,0,0, 0.5)'
            }
          }]
        },
        elements: {
          line: {
            tension: 0
          }
        },
      };
      const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('.main-chart-container canvas');
      canvas.height = 300;
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
      new Chart(ctx, response.mainChartData);
    })
    .catch((e: any) => {
      console.log('Error with fetching stats', e);
    });

  if (navigator.serviceWorker) {
    navigator.serviceWorker.ready.then((sw: ServiceWorkerRegistration) => {
      sw.onupdatefound = () => {
        const alertElement: HTMLElement = document.createElement('div');
        alertElement.setAttribute('class', 'alert alert-primary sw-update-alert');
        alertElement.innerHTML = 'This page has been updated. <a href="javascript:location.reload()">Click here</a> to refresh the page.';

        document.body.appendChild(alertElement);
      };
    });
  }

};

document.addEventListener('DOMContentLoaded', onLoad);
//
// console.log('lol');