import { Component } from '@stencil/core';


@Component({
  tag: 'home-component',
  styleUrl: 'home-component.css'
})

export class HomeComponent {
  render() {
    return [

      <p>
        My name is Samarjit

      </p>,

     <stencil-route-link url="/about">
        <button>go to about</button>
     </stencil-route-link>

    ]
  }
}
