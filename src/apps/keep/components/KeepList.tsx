// import Keep from '../../../interfaces/keep'
import { memo } from 'react'
import { KeepListProps } from '../../../interfaces/keep'

function _KeepList({ keeps, onDeleteKeep, onUpdateKeep, onCopyKeep }: KeepListProps) {
    return (

        <ul className='keep-list-container'>
            {keeps.map(keep =>
                <li key={keep._id} className='keep-preview'>
                    <div>
                        <h1 className='keep-title'>title: {keep.title}</h1>
                    </div>
                    <div>
                        <h3>my description: {keep.description}</h3>
                    </div>
                    <div>
                        <button onClick={() => onDeleteKeep(keep._id!.toString())}>delete me</button>
                        <button onClick={() => onUpdateKeep(keep._id!.toString())}>or edit my details</button>
                        <button onClick={() => onCopyKeep(keep)}>or just copy me</button>
                    </div>
                </li>
            )}
        </ul>
    )
}

export const KeepList = memo(_KeepList)