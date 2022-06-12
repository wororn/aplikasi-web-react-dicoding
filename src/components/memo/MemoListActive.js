import React from 'react'
import MemoItem from './MemoItem'

function MemoListActive ({
    memos,
    onDeleteActionHandler,
    onArchieveActionHandler
  }) {

    const memosActive = memos.filter(memo => !memo.isArchieved)
    return (

        <React.Fragment>
        <h4 className='section-memolist__subtitle'>Catatan Aktif</h4>
        {memosActive.length ? (
          <div className='memo-list spacing'>
            {memosActive.map(memo => (
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

  
export default MemoListActive
