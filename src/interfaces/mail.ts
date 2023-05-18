
export interface Mail {
    _id? : string,
    participants: Array<string>,
    title: string,
    description: string,
    attached?: any[],
    starred: boolean,
    important: boolean,
    checkMark?: boolean,
    read: boolean,
}

export interface MailListProps {
    mails: Mail[];
    onToggleStar: (mail: Mail) => void;
}