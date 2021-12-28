import { Variant } from './common/models/variant';
import { IVariantState } from './store/states/variant.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetVariant } from './store/actions/variant.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-task';

  variant$!: Observable<Variant>;

  constructor(private store: Store<IVariantState>) {
    this.store.dispatch(new GetVariant)
    this.variant$ = store.select('variant');
  }
}
