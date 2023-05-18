import { Dispatch } from "redux";
import MailService from "../../services/mail.service";
import { ADD_MAIL, MailActionTypes, MailsFilterBy, REMOVE_MAIL, SET_FILTER_BY, SET_MAILS, UPDATE_MAIL } from "../../interfaces/mail.store";
import { Mail } from "../../interfaces/mail";


const mailService = MailService;

export function loadMails() {
    return async (dispatch: Dispatch<MailActionTypes>) => {
        try {
            const mails = await mailService.getMails();
            const action: MailActionTypes = {
                type: SET_MAILS,
                mails
            };
            dispatch(action);
        }
        catch (err) {
            console.log('err', err);
            
        }
    }
}

export function copyMail(mail: Mail) {
    return async (dispatch: Dispatch<MailActionTypes>) => {
      try {
        const newMail = await MailService.saveMail(mail);
        const action: MailActionTypes = { type: ADD_MAIL, mail: newMail };
        dispatch(action);
      } catch (err) {
        console.log('err', err);
      }
    };
  }

  export function updateMail(mail:Mail) {
    return async (dispatch: Dispatch<MailActionTypes>) => {
      try{
        await MailService.saveMail(mail)
        const action: MailActionTypes = { type: UPDATE_MAIL, mail}
        dispatch(action)
      }
      catch(err){
        console.log('err', err);
      }
    }
  }
  
  export function removeMail(mailId: string) {
    return async (dispatch: Dispatch<MailActionTypes>) => {
      try {
        await mailService.removeMail(mailId);
        const action: MailActionTypes = { type: REMOVE_MAIL, mailId };
        dispatch(action);
      } catch (err) {
        console.log('err', err);
      }
    };
  }

  export function setMailsFilterBy(filterBy: MailsFilterBy) {
    return {
      type: SET_FILTER_BY,
      filterBy,
    };
  }