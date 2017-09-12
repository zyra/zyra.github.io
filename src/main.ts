declare const Chart: any;

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

  fetch('/assets/stats.json')
    .then((response: Response) => response.json())
    .then((response: Stats) => {

    response.mainChartData.options = {
      responsive: true,
      title:{
        display:true,
        text: 'Overall statistics'
      },
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
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }]
      }
    };

      const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('chart-canvas');
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
      let _chart = new Chart(ctx, response.mainChartData);

      console.log('Response is ', response);
    })
    .catch((e: any) => {
      console.log('Error with fetching stats', e);
    });

};

document.addEventListener('DOMContentLoaded', onLoad);
//
// console.log('lol');