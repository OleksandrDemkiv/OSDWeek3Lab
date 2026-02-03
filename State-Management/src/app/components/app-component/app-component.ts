import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { StateService } from '../../services/state-service';

@Component({
  selector: 'app-app-component',
  imports: [],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
})
export class AppComponent {
  state = inject(StateService);

  increment() {
    this.state.increment();
  }

  decrement() {
    this.state.decrement();
  }
}
