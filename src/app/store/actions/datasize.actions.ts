import { Action } from '@ngrx/store';
import { DataSizeModel } from '../../model/datasize.model';

export const UPDATE_DATASIZE = 'UPDATE_DATASIZE';
export const RESET_DATASIZE = 'RESET_DATASIZE';

export class UpdateDataSizeAction implements Action {
  readonly type = UPDATE_DATASIZE;

  constructor(public payload: DataSizeModel) { }
}

export class ResetDataSizeAction implements Action {
  readonly type = RESET_DATASIZE;
}

export type AllDataSizeActions = UpdateDataSizeAction | ResetDataSizeAction;

