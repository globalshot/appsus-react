// keep.reducer.ts

import { Keep } from '../../interfaces/keep';
import { KeepActionTypes, KeepState, SET_FILTER_BY, SET_KEEPS, REMOVE_KEEP, UPDATE_KEEP, ADD_KEEP } from '../../interfaces/keep.store';

const INITIAL_STATE: KeepState = {
  keeps: null,
  filterBy: {
    title: '',
  },
};

export function keepReducer(state = INITIAL_STATE, action: KeepActionTypes): KeepState {
  switch (action.type) {
    case SET_KEEPS:
      return {
        ...state,
        keeps: action.keeps,
      };

    case ADD_KEEP:
      return {
        ...state,
        keeps: state.keeps ? [...state.keeps, action.keep] : [action.keep],
      };

    case REMOVE_KEEP:
      return {
        ...state,
        keeps: state.keeps ? state.keeps.filter((keep: Keep) => keep._id !== action.keepId) : null,
      };

    case UPDATE_KEEP:
      return {
        ...state,
        keeps: state.keeps
          ? state.keeps.map((keep: Keep) => (keep._id === action.keep._id ? action.keep : keep))
          : null,
      };

    case SET_FILTER_BY:
      return {
        ...state,
        filterBy: { ...action.filterBy },
      };

    default:
      return state;
  }
}
