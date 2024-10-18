import { Component } from '@angular/core';

import Heading from './components/heading/index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Heading],
  template: `
    <heading />
  `
})
export class AppComponent {}
