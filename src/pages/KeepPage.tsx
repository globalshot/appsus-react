import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { KeepList } from "../apps/keep/pages/KeepList";
import { Keep } from "../interfaces/keep";
import { RootState } from '../interfaces/rootState.store';
import { copyKeep, loadKeeps, removeKeep } from '../store/actions/keep.actions';
import { NavLink, useNavigate } from 'react-router-dom';
import KeepService from '../services/keep.service';


export function KeepPage() {
  const keeps: Keep[] = useSelector((storeState: RootState) => storeState.keepModule.keeps || [])
  const dispatch = useDispatch()

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadKeeps() as any)
  },
  )

  const handleDeleteKeep = async (id: string) => {
    try {
      await KeepService.removeKeep(id)
      dispatch(removeKeep(id) as any);
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleCopyKeep = async (keep: Keep) => {
    try{
      var keepCopy = {...keep}
      delete keepCopy._id
      await KeepService.saveKeep(keepCopy)
      dispatch(copyKeep(keepCopy) as any)
    }
    catch(err){
      console.log(err);
      
    }
  }
  const handleUpdateKeep = (id: string) => {
    navigate({ pathname: `/keep/edit/${id}` })
  };
  if (!keeps) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>im keep page</div>
      <NavLink to='/keep/edit/:id?'>add keep</NavLink>
      <KeepList keeps={keeps}
        onDeleteKeep={handleDeleteKeep}
        onUpdateKeep={handleUpdateKeep}
        onCopyKeep={handleCopyKeep}
      ></KeepList>
    </div>
  )
}