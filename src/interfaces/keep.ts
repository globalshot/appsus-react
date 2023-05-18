
export interface Keep {
    _id?: string,
    title: string,
    description?: string,
    background: string
}

export interface KeepListProps {
    keeps: Keep[];
    onDeleteKeep: (id: string) => void;
    onUpdateKeep: (id: string) => void;
    onCopyKeep: (keep: Keep) => void;
    onChangeBackground: (keep: Keep) => void;
    // onUpdateKeep: (id: string, updatedKeep: Keep) => void;
}