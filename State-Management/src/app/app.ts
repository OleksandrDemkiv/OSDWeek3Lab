import { Component, signal } from '@angular/core';
import { AppComponent } from './components/app-component/app-component';
import { Child1 } from './components/child1/child1';
import { Child2 } from './components/child2/child2';

@Component({
  selector: 'app-root',
  imports: [AppComponent, Child1, Child2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('State-Management');
}
