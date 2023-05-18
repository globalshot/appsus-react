import { useSelector } from "react-redux";
import { MailList } from "../apps/mail/components/MailList";
import { MailSidebar } from "../apps/mail/components/MailSidebar";
import { Mail } from "../interfaces/mail";
import { RootState } from "../interfaces/rootState.store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loadMails, setMailsFilterBy, updateMail } from "../store/actions/mail.actions";


export function MailPage() {

    const mails: Mail[] = useSelector((storeState: RootState) => storeState.mailModule.mails || [])
    const dispatch = useDispatch()
    const filterBy = useSelector((storeState: RootState) => storeState.mailModule.filterBy)

    const [filteredMails, setFilteredMails] = useState<Mail[]>([]);

    useEffect(() => {
        dispatch(loadMails() as any)
    }, [])
    useEffect(() => {
          setFilteredMails(mails.filter((mail: Mail) => {
            if (filterBy.star && !mail.starred) {
              return false;
            }
            return true;
          }));
      }, [mails, filterBy]);

    const handleStarToggleMail = async (mail: Mail) => {
        try {
            mail.starred = !mail.starred
            dispatch(updateMail(mail) as any)
        }
        catch (err) {
            console.log(err);

        }
    }
    function handleCategoryClick(category: string) {
        //reset to all filters
        filterBy.star = false
        switch (category) {
            case 'star':
                filterBy.star = true
                break;
            default:
                break;
        }
        dispatch(setMailsFilterBy(filterBy) as any)
    }

    if (!mails) {
        return <div>Loading...</div>;
    }
    return (
        <main className="mail-page-container">
            <div>
                <MailSidebar onCategoryClick={handleCategoryClick} />
            </div>
            <div>
                filter
                <MailList mails={filteredMails}
                    onToggleStar={handleStarToggleMail}
                />
            </div>
        </main>
    )
}