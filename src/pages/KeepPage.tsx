import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { KeepList } from "../apps/keep/pages/KeepList";
import { Keep } from "../interfaces/keep";
import { RootState } from '../interfaces/rootState.store';
import { useDispatch } from "react-redux";
import { loadKeeps } from '../store/actions/contact.actions';

export function KeepPage() {
    
    // var keeps: Keep[]= [
    //     {
    //         _id: 'funny',
    //         title: 'im an title'
    //     },
    //     {
    //         _id: '1g123g',
    //         title: 'im 2nd'
    //     },
    //     {
    //         _id: '662g34',
    //         title: 'im 3nd'
    //     },
    //     {
    //         _id: 'gag3sx',
    //         title: 'i wanna die'
    //     },
    // ]
    const keeps: Keep[] = useSelector((storeState: RootState) => storeState.keepModule.keeps || [])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadKeeps())
    }
    )

    const handleDeleteKeep = (id: string) => {
        // Implement delete functionality here...
        console.log(`did you just try to delete `+ id);
        
      };
    
      const handleUpdateKeep = (id: string, updatedKeep: Keep) => {
        // Implement update functionality here...
      };
      if (!keeps) {
        return <div>Loading...</div>;
      }
    return (
        <div>
        <div>im keep page</div>
        <KeepList keeps={keeps}
        onDeleteKeep={handleDeleteKeep}
        onUpdateKeep={handleUpdateKeep}
        ></KeepList>
        </div>
    )
}