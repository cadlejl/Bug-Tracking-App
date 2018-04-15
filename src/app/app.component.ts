import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <navbar></navbar>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`
    .container {
      margin-top: 5rem;
    }
  `]
})
export class AppComponent {
  // title = 'app'; // Default
}
