import { memo } from "react"
import { Mail, MailListProps } from "../../../interfaces/mail"

function toggleStar(mail: Mail) {
    console.log('hi');
    //works but it doesnt update your data, because its not local, so it rerender it the same
    mail.starred = !mail.starred;
}
function _MailList({ mails, onToggleStar }: MailListProps) {
    //you can add pages, and user can choose from few options how to display
    return (
        <div>
            {mails.map(mail =>
                <div className={"mail-preview " + (mail.read ? 'read' : '')}>
                    {/* dont forget to add specifically click on this to go to details */}
                    {/* <div className="mail-card"> */}
                    <div>
                        <span className="category-toggle" onClick={() => onToggleStar(mail)}>
                            <svg viewBox="0 0 16 16" width="16" height="16" >
                                <polygon points="8,0 10.4,5.9 16,6.9 12,11.4 13.4,16 8,13 2.6,16 4,11.4 0,6.9 5.6,5.9" fill={mail.starred ? 'gold' : 'none'} stroke="black" strokeWidth="0.2" />
                            </svg>
                        </span>
                        {/* <span className="category-toggle">
                            important-{mail.important}
                        </span> */}
                    </div>
                    <div className="mail-sender">
                        {mail.participants.join(', ')}
                        {/* add number if more then 1 participant? */}
                    </div>
                    <div>
                        <span className="mail-title">
                        {mail.title}
                        </span>
                        -
                        <span className="mail-description">
                            {mail.description}
                        </span>
                    </div>
                    {/* </div> */}
                </div>
            )}
        </div>
    )
}

export const MailList = memo(_MailList)