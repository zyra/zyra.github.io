import { Component } from '@stencil/core';


@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss'
})
export class SiteHeader {

  render() {
    return [
        <img src="/assets/v8-zm-white.svg" alt="Zyra Media Logo" />,
        <h1>Open Source Software</h1>
    ]
  }
}