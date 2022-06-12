import React from 'react'

import MemoItem from './MemoItem'

function MemoListArchieved ({
    memos,
    onDeleteActionHandler,
    onArchieveActionHandler
  }) {
    const memosArchieved = memos.filter(memo => memo.isArchieved)
    
  return (
    <React.Fragment>
      <h4 className='section-memolist__subtitle'>Arsip</h4>
      {memosArchieved.length ? (
        <div className='memo-list spacing'>
          {memosArchieved.map(memo => (
            <MemoItem
              key={memo.id}
              {...memo}
              onDeleteActionHandler={onDeleteActionHandler}
              onArchieveActionHandler={onArchieveActionHandler}
            />
          ))}
        </div>
      ) : (
        <div className='memo-list__empty'>Tidak ada catatan</div>
      )}
    </React.Fragment>
  )
  }

  
export default MemoListArchieved
