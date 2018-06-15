import * as fromUsage from '../actions/datasize.actions';
import { DataSizeModel } from '../../model/datasize.model';

const inititalState: DataSizeModel = {
  remainingDataSize: 3,
  usedDataSize: 2
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function dataSizeReducer(state: DataSizeModel = inititalState, action: fromUsage.AllDataSizeActions) {
  switch (action.type) {
    case fromUsage.UPDATE_DATASIZE: {
      return newState(state, action.payload);
    }
    case fromUsage.RESET_DATASIZE: {
      return inititalState;
    }
    default:
      return state;
  }
}
