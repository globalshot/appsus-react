import { Mail } from "./mail";

export interface MailsFilterBy {
  star: boolean;
}
export interface MailState {
    mails: Mail[] | null;
    filterBy: MailsFilterBy
}

export const SET_MAILS = "SET_MAILS";
export const ADD_MAIL = "ADD_MAIL";
export const REMOVE_MAIL = "REMOVE_MAIL";
export const UPDATE_MAIL = "UPDATE_MAIL";
export const SET_FILTER_BY = "SET_FILTER_BY";

interface SetMailsAction {
  type: typeof SET_MAILS;
  mails: Mail[];
}

interface AddMailAction {
  type: typeof ADD_MAIL;
  mail: Mail;
}

interface RemoveMailAction {
  type: typeof REMOVE_MAIL;
  mailId: string;
}

interface UpdateMailAction {
  type: typeof UPDATE_MAIL;
  mail: Mail;
}

interface SetMailsFilterByAction {
  type: typeof SET_FILTER_BY;
  filterBy: MailsFilterBy;
}

export type MailActionTypes =
  | SetMailsAction
  | AddMailAction
  | RemoveMailAction
  | UpdateMailAction
  | SetMailsFilterByAction;
