import React from 'react'


function MemoItem ({
    id,
    title,
    body,
    createdAt,
    isArchieved,
    onArchieveActionHandler,
    onDeleteActionHandler
  })
{

    const calendar = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    
  const DateCreatedAt = new Date(createdAt).toLocaleDateString(
    'id-ID',
    calendar
  )

  return(
    <div className='memo-item'>
    <div className='memo-item__body'>
      <div className='memo-item__title'>{title}</div>
      <div className='memo-item__desc'>{body}</div>
    </div>
    <div className='memo-item__footer'>
      <div className='memo-item__date'>{DateCreatedAt}</div>
      <div className='memo-item__container-action'>
        <button
          className='memo-item__button button--archieve'
          onClick={() => onArchieveActionHandler(id)}
        >
          {isArchieved ? 'Pindahkan' : 'Arsipkan'}
        </button>
        <button
          className='memo-item__button button--delete'
          onClick={() => onDeleteActionHandler(id)}
        >
          Hapus
        </button>
      </div>
    </div>
  </div>

  )

}


export default MemoItem