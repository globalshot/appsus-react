// import Keep from '../../../interfaces/keep'
import { memo } from 'react'
import { Keep, KeepListProps } from '../../../interfaces/keep'

function _KeepList({ keeps, onDeleteKeep, onUpdateKeep } : KeepListProps ) {
    return (
        <section className='keep-list'>
            {keeps.map(keep => 

            <article key={keep._id} className='keep-preview'>
                <h1>title: {keep.title}</h1>
                <h3>my id: {keep._id}</h3>
                <button onClick={() => onDeleteKeep(keep._id!.toString())}>delete me</button>
            </article>

                )}
        </section>
    )
}

export const KeepList = memo(_KeepList)