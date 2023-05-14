import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { KeepList } from "../apps/keep/components/KeepList";
import { Keep } from "../interfaces/keep";
import { RootState } from '../interfaces/rootState.store';
import { copyKeep, loadKeeps, removeKeep, setFilterBy } from '../store/actions/keep.actions';
import { NavLink, useNavigate } from 'react-router-dom';
import KeepService from '../services/keep.service';
import { KeepFilter } from '../apps/keep/components/KeepFilter';
import { FilterBy } from '../interfaces/keep.store';


export function KeepPage() {
  const keeps: Keep[] = useSelector((storeState: RootState) => storeState.keepModule.keeps || [])
  const dispatch = useDispatch()
  const filterBy = useSelector((storeState: RootState) => storeState.keepModule.filterBy)
  
  const filteredKeeps = keeps.filter((keep: Keep) => {
    // Apply the filter here
    if (filterBy.title && keep.title.indexOf(filterBy.title) === -1) {
      return false
    }
    // Add more filters as needed
    if (filterBy.title && keep.description && keep.description.indexOf(filterBy.title) === -1) {
      return false
    }
    
    return true
  })
  const handleFilterChange = (filterBy: FilterBy) => {
    dispatch(setFilterBy(filterBy) as any);
  };



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
    try {
      var keepCopy = { ...keep }
      delete keepCopy._id
      await KeepService.saveKeep(keepCopy)
      dispatch(copyKeep(keepCopy) as any)
    }
    catch (err) {
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
      <KeepFilter onFilterChange={handleFilterChange}></KeepFilter>
      <div className='keep-container'>
      {/* change this to some form i guess and it auto save when you click outside if there input */}
      <NavLink to='/keep/edit/:id?' className={'keep-add'}>add keep</NavLink>
        <div className='keep-list'>
          <KeepList keeps={filteredKeeps}
            onDeleteKeep={handleDeleteKeep}
            onUpdateKeep={handleUpdateKeep}
            onCopyKeep={handleCopyKeep}
          ></KeepList>
        </div>
      </div>
    </div>
  )
}