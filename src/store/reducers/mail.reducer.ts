import { Mail } from "../../interfaces/mail";
import { ADD_MAIL, MailActionTypes, MailState, REMOVE_MAIL, SET_FILTER_BY, SET_MAILS, UPDATE_MAIL } from "../../interfaces/mail.store";



const INITIAL_STATE: MailState = {
  mails: null,
  filterBy: {
    star: false,
  }
}

export function mailReducer(state = INITIAL_STATE, action: MailActionTypes): MailState {
  switch (action.type) {
    case SET_MAILS:
      return {
        ...state,
        mails: action.mails,
      };

    case ADD_MAIL:
      return {
        ...state,
        mails: state.mails ? [...state.mails, action.mail] : [action.mail],
      };

    case REMOVE_MAIL:
      return {
        ...state,
        mails: state.mails ? state.mails.filter((mail: Mail) => mail._id !== action.mailId) : null,
      };

    case UPDATE_MAIL:
      return {
        ...state,
        mails: state.mails
          ? state.mails.map((mail: Mail) => (mail._id === action.mail._id ? action.mail : mail))
          : null,
      };

    case SET_FILTER_BY:
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          ...action.filterBy,
        },
      };

    default:
      return state;
  }
}