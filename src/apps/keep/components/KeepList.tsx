// import Keep from '../../../interfaces/keep'
import { memo } from 'react'
import { Keep, KeepListProps } from '../../../interfaces/keep'

function _KeepList({ keeps, onDeleteKeep, onUpdateKeep, onCopyKeep, onChangeBackground }: KeepListProps) {
    var deleteSvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14M10 11h4"/>
  </svg>
    var editSvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.25 3L21 7.75L8.75 20H4V15.25L16.25 3Z"/>
  </svg>
    let debounceTimer: any;
    return (

        <ul className='keep-list-container'>
            {keeps.map(keep =>
                <li key={keep._id} className='keep-preview' style={{ backgroundColor: keep.background }}>
                    <div>
                        <h1 className='keep-title'>{keep.title}</h1>
                    </div>
                    <div>
                        <h3 className='keep-description'>{keep.description}</h3>
                    </div>
                    <div>
                        <button onClick={() => onDeleteKeep(keep._id!.toString())}>{deleteSvg}</button>
                        <button onClick={() => onUpdateKeep(keep._id!.toString())}>{editSvg}</button>
                        <button onClick={() => onCopyKeep(keep)}>Clone</button>
                        <button onClick={() => {
                            keep.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
                            onChangeBackground(keep)
                        }}>
                            Random background color
                        </button>
                        <input type="color" value={keep.background} onChange={(event) => {
                            clearTimeout(debounceTimer);
                            const newColor = event.target.value;
                            debounceTimer = setTimeout(() => {
                            keep.background = newColor
                            onChangeBackground(keep)
                        },100)
                        }} />
                    </div>
                </li>
            )}
        </ul>
    )
}

export const KeepList = memo(_KeepList)