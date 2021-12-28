import { VariantService } from './../../common/services/variant.service';
import {
  UpdateVariant,
  EVariantActions,
  GetVariantSuccess,
  GetSpecialVariant,
  GetVariant,
} from './../actions/variant.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class VariantEffects {
  public updateVariant = createEffect(() => {
    return this.actions.pipe(
      ofType<UpdateVariant>(EVariantActions.UpdateVariant),
      switchMap(() => this.variantService.getVariant()),
      switchMap((variant) => {
        return of(new GetVariantSuccess(variant));
      })
    );
  });


  public loadVariant = createEffect(() => {
    return this.actions.pipe(
      ofType<GetVariant>(EVariantActions.GetVariant),
      switchMap(() => this.variantService.getVariant()),
      switchMap((variant) => {
        return of(new GetVariantSuccess(variant));
      })
    );
  });

  constructor(
    private actions: Actions,
    private variantService: VariantService
  ) {}
}
