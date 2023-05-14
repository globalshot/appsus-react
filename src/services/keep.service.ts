import { Keep } from '../interfaces/keep';
import { FilterBy } from '../interfaces/keep.store';
import { storageService } from './storage.service';


const KeepService = {
    getKeeps,
    getKeepById,
    removeKeep,
    saveKeep,
    getEmptyKeep
};
export default KeepService;

const STORAGE_KEY = 'keeps';

const gDefaultKeeps: Keep[] = [
    {
        _id: 'funny',
        title: 'im an title',
        description: ''
    },
    {
        _id: '1g123g',
        title: 'im 2nd',
        description: ''
    },
    {
        _id: '662g34',
        title: 'im 3nd',
        description: ''
    },
    {
        _id: 'gag3sx',
        title: 'i wanna die',
        description: ''
    },
    {
        _id: '1g23g',
        title: 'i dont rlly want to die',
        description: ''
    },
    {
        _id: 'aae3s',
        title: 'we gonna fly somehow',
        description: ''
    },
    {
        _id: 'itest',
        title: 'welp im testing',
        description: ''
    },
];

const gKeeps: Keep[] = _loadKeeps();

function _loadKeeps(): Keep[] {
    let keeps = storageService.load(STORAGE_KEY);
    if (!keeps || !keeps.length) keeps = gDefaultKeeps;
    storageService.store(STORAGE_KEY, keeps);
    return keeps;
}

function sort(arr: Keep[]): Keep[] {
    return arr.sort((a, b) => {
        if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
            return -1;
        }
        if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) {
            return 1;
        }

        return 0;
    });
}

function getKeeps(filterBy: FilterBy | null = null): Promise<Keep[]> {
    return new Promise((resolve, reject) => {
        let keepsToReturn = gKeeps;
        if (filterBy && filterBy.title) {
            keepsToReturn = filter(filterBy.title);
        }
        resolve(keepsToReturn);//not sorted
        // resolve(sort(keepsToReturn));//sorted by abc
    });
}

function getKeepById(id: string): Promise<Keep> {
    return new Promise((resolve, reject) => {
        const keep = gKeeps.find(keep => keep._id === id);
        keep ? resolve(keep) : reject(`Keep id ${id} not found!`);
    });
}

function removeKeep(id: string): Promise<Keep[]> {
    return new Promise((resolve, reject) => {
        const index = gKeeps.findIndex(keep => keep._id === id);
        if (index !== -1) {
            gKeeps.splice(index, 1);
        }
        storageService.store(STORAGE_KEY, gKeeps);
        resolve(gKeeps);
    });
}

function _updateKeep(keep: Keep): Promise<Keep> {
    return new Promise((resolve, reject) => {
        const index = gKeeps.findIndex(c => keep._id === c._id);
        if (index !== -1) {
            gKeeps[index] = keep;
        }
        storageService.store(STORAGE_KEY, gKeeps);
        resolve(keep);
    });
}

function _addKeep(keep: Keep): Promise<Keep> {
    keep._id = _makeId();
    gKeeps.push(keep);
    storageService.store(STORAGE_KEY, gKeeps);
    return Promise.resolve(keep);
}

function saveKeep(keep: Keep): Promise<Keep> {
    console.log('keep before saving', keep);
    return keep._id ? _updateKeep(keep) : _addKeep(keep);
}

function getEmptyKeep(): Keep {
    return {
        title: '',
        description: ''
    };
}

function filter(title: string) {
    title = title.toLocaleLowerCase()
    return gKeeps.filter(keep => {//dont change this filter
        // return keep.name.toLocaleLowerCase().includes(title) ||
        //     // keep.phone.toLocaleLowerCase().includes(title) ||
        //     keep.description?.toLocaleLowerCase().includes(title)
        return keep
    })
}

function _makeId(length: number = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}
