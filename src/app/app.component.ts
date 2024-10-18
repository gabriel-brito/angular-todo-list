import { Component } from '@angular/core';

import Heading from './components/heading';
import Todo from './components/todo-container';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Heading, Todo],
  template: `
    <heading />

    <todo-app />
  `
})
export class AppComponent {}
