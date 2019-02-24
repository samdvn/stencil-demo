import { Component } from '@stencil/core';
import '@stencil/router';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  constructor() {

  }
  render() {
    return (
      <div>
      <stencil-router id='router'>
          <stencil-route url='/' component='home-component' exact={true} />
          <stencil-route url='/about' component='about-component' />

      </stencil-router >
      </div>
    )
  }

}
