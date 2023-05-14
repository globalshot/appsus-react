import { Mail } from "../interfaces/mail";
import { storageService } from "./storage.service";


const MailService = {
    getMails,
    getMailById,
    removeMail,
    saveMail,
    getEmptyMail
}

export default MailService;

const STORAGE_KEY = 'mails'

const gDefaultMails: Mail[] = [
    {
        participants: ['me'],
        title: 'im cool',
        description: 'im cool',
        starred: false,
        important: false,
        read: false
    },
    {
        participants: ['you'],
        title: 'you are cool',
        description: 'like in the title, you are cool',
        starred: false,
        important: false,
        read: false
    },
    {
        participants: ['john'],
        title: 'dont look here john',
        description: 'but i looked inside',
        starred: true,
        important: true,
        read: false
    },
    {
        participants: ['don'],
        title: 'here what you needed',
        description: 'im testing everything',
        starred: false,
        important: false,
        read: true
    },
    {
        participants: ['did', 'fill'],
        title: 'we are group',
        description: 'so we are trio now',
        starred: true,
        important: false,
        read: true
    },
];

const gMails: Mail[] = _loadMails();

function _loadMails(): Mail[] {
    let mails = storageService.load(STORAGE_KEY)
    if (!mails || !mails.length) mails = gDefaultMails
    storageService.store(STORAGE_KEY, mails)
    return mails
}

// function getMails(filterBy: FilterBy | null = null): Promise<Mail[]> {
function getMails(): Promise<Mail[]> {
    return new Promise((resolve, reject) => {
        resolve(gMails);//not sorted
        // resolve(sort(mailsToReturn));//sorted by abc
    });
}

function getMailById(id: string): Promise<Mail>{
    return new Promise((resolve, reject) => {
        const mail = gMails.find(mail => mail._id === id)
        mail ? resolve(mail) : reject (`mail id ${id} not found!`)
    })
}

function removeMail(id: string): Promise<Mail[]> {
    return new Promise((resolve, reject) => {
        const index = gMails.findIndex(mail => mail._id === id)
        if (index !== -1) {
            gMails.splice(index, 1)
        }
        storageService.store(STORAGE_KEY, gMails)
        resolve(gMails)
    })
}

function _updateMail(mail: Mail): Promise<Mail> {
    return new Promise((resolve, reject) => {
        const index = gMails.findIndex(c => mail._id === c._id);
        if (index !== -1) {
            gMails[index] = mail;
        }
        storageService.store(STORAGE_KEY, gMails);
        resolve(mail);
    });
}

function _addMail(mail: Mail): Promise<Mail> {
    mail._id = _makeId();
    gMails.push(mail);
    storageService.store(STORAGE_KEY, gMails);
    return Promise.resolve(mail);
}

function saveMail(mail: Mail): Promise<Mail> {
    console.log('mail before saving', mail);
    return mail._id ? _updateMail(mail) : _addMail(mail);
}

function getEmptyMail(): Mail {
    return {
        participants: [],
        title: '',
        description: '',
        starred: false,
        important: false,
        read: false
    };
}

function _makeId(length: number = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}