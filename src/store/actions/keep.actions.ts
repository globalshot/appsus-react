import { Dispatch } from 'redux';
import KeepService from '../../services/keep.service';
import { FilterBy, KeepActionTypes, SET_FILTER_BY, SET_KEEPS, REMOVE_KEEP, ADD_KEEP } from '../../interfaces/keep.store';
import { Keep } from '../../interfaces/keep';

const keepService = KeepService;

export function loadKeeps() {
  return async (dispatch: Dispatch<KeepActionTypes>, getState: () => { keepModule: { filterBy: FilterBy } }) => {
    try {
      const keeps = await keepService.getKeeps(getState().keepModule.filterBy);
      const action: KeepActionTypes = {
        type: SET_KEEPS,
        keeps,
      };
      dispatch(action);
      // await dispatch(action); got suggested to try those 2
      // return keeps;
    } catch (err) {
      console.log('err', err);
    }
  };
}

export function copyKeep(keep: Keep) {
  return async (dispatch: Dispatch<KeepActionTypes>) => {
    try {
      const newKeep = await KeepService.saveKeep(keep);
      const action: KeepActionTypes = { type: ADD_KEEP, keep: newKeep };
      dispatch(action);
    } catch (err) {
      console.log('err', err);
    }
  };
}

export function removeKeep(keepId: string) {
  return async (dispatch: Dispatch<KeepActionTypes>) => {
    try {
      await keepService.removeKeep(keepId);
      const action: KeepActionTypes = { type: REMOVE_KEEP, keepId };
      dispatch(action);
    } catch (err) {
      console.log('err', err);
    }
  };
}


export function setFilterBy(filterBy: FilterBy) {
  return (dispatch: Dispatch<KeepActionTypes>) => {
    dispatch({ type: SET_FILTER_BY, filterBy });
  };
}
