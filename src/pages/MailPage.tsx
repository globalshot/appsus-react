import { useSelector } from "react-redux";
import { MailList } from "../apps/mail/components/MailList";
import { MailSidebar } from "../apps/mail/components/MailSidebar";
import { Mail } from "../interfaces/mail";
import { RootState } from "../interfaces/rootState.store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadMails } from "../store/actions/mail.actions";


export function MailPage() {

    const mails: Mail[] = useSelector((storeState: RootState) => storeState.mailModule.mails || [])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMails() as any)
    },
    )
    if (!mails) {
        return <div>Loading...</div>;
    }
    return (
        <main className="mail-page-container">
            <div>
                <MailSidebar></MailSidebar>
            </div>
            <div>
                filter
                <MailList mails={mails}

                />
            </div>
        </main>
    )
}