import { Component } from '@stencil/core';


@Component({
  tag: 'site-nav',
  styleUrl: 'site-nav.scss'
})
export class SiteNav {

  render() {
    return <nav>
      <ul>
        <li>
          Home
        </li>
        <li>
          Repos
        </li>
        <li>
          Stats
        </li>
      </ul>
    </nav>
  }
}