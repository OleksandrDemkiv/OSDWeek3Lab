import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { StateService } from '../../services/state-service';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 {
  state = inject(StateService);

  get doubleCount() {
    return this.state.doubleCount();
  }
}
