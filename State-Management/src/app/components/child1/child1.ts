import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { StateService } from '../../services/state-service';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
})
export class Child1 {
  state = inject(StateService);

  get count() {
    return this.state.getCount();
  }
}
