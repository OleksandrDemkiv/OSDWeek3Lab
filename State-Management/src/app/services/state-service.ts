import { computed, Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly _count = signal(0);

  readonly Count: Signal<number> = this._count.asReadonly();
  readonly doubleCount: Signal<number> = computed(() => this._count() * 2);
  
  increment() {
    this._count.update((v) => v + 1);
  }

  decrement() {
    this._count.update((v) => Math.max(0, v - 1));
  }

  getCount() {
    return this._count();
  }
}
