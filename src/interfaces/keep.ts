import { Key } from "react";

export interface Keep {
    _id?: Key,
    title?: string,
}

export interface KeepListProps {
    keeps: Keep[];
    onDeleteKeep: (id: string) => void;
    onUpdateKeep: (id: string, updatedKeep: Keep) => void;
}