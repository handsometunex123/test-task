import { Variant } from './../../common/models/variant';
import { Action } from '@ngrx/store';

export enum EVariantActions {
  UpdateVariant = '[Variant] Update Variants',
  GetVariantSuccess = '[Variant] Get Variants Success',
  GetSpecialVariant = '[Variant] Get Special Variants',
  GetVariant = '[Variant] Get Variants'
}

export class UpdateVariant implements Action {
  public readonly type = EVariantActions.UpdateVariant;
  constructor(public payload: string) {}
}

export class GetSpecialVariant implements Action {
  public readonly type = EVariantActions.GetSpecialVariant;
  constructor(public payload: string) {}
}


//added to get variants
export class GetVariant implements Action {
  public readonly type = EVariantActions.GetVariant;
}


export class GetVariantSuccess implements Action {
  public readonly type = EVariantActions.GetVariantSuccess;
  constructor(public payload: Variant) {}
}

export type VariantActions =
UpdateVariant |
GetVariantSuccess | GetVariant;
