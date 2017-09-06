import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return [
      <site-header></site-header>,
      <p>Hello world</p>
    ];
  }
}