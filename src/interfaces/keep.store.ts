import { Keep } from "./keep";

export interface FilterBy {
  title: string;
}

export interface KeepState {
  keeps: Keep[] | null;
  filterBy: FilterBy;
}

export const SET_KEEPS = "SET_KEEPS";
export const ADD_KEEP = "ADD_KEEP";
export const REMOVE_KEEP = "REMOVE_KEEP";
export const UPDATE_KEEP = "UPDATE_KEEP";
export const SET_FILTER_BY = "SET_FILTER_BY";

interface SetKeepsAction {
  type: typeof SET_KEEPS;
  keeps: Keep[];
}

interface AddKeepAction {
  type: typeof ADD_KEEP;
  keep: Keep;
}

interface RemoveKeepAction {
  type: typeof REMOVE_KEEP;
  keepId: string;
}

interface UpdateKeepAction {
  type: typeof UPDATE_KEEP;
  keep: Keep;
}

interface SetFilterByAction {
  type: typeof SET_FILTER_BY;
  filterBy: FilterBy;
}

export type KeepActionTypes =
  | SetKeepsAction
  | AddKeepAction
  | RemoveKeepAction
  | UpdateKeepAction
  | SetFilterByAction;
