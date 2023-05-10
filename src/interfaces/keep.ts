import { Key } from "react";

export interface Keep {
    _id?: string,
    // _id?: Key | string,
    title: string,
}

export interface KeepListProps {
    keeps: Keep[];
    onDeleteKeep: (id: string) => void;
    onUpdateKeep: (id: string) => void;
    onCopyKeep: (keep: Keep) => void;
    // onUpdateKeep: (id: string, updatedKeep: Keep) => void;
}