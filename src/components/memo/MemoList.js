import React from 'react'

import MemoListActive from './MemoListActive'
import MemoListArchieved from './MemoListArchieved'

class MemoList extends React.Component {

    constructor (props) {
        super(props)
    
        this.onSearchHandler = this.onSearchHandler.bind(this)
      }

      onSearchHandler (event) {
        this.props.onSearchingHandler(event.target.value)
      }

      render () {
        return (
            <section className='section-memolist'>
            <div className='section-memolist__header'>
              <h1>Daftar Catatan</h1>
              <input
                className='memo-form__title'
                type='text'
                placeholder='Cari Judul ...'
                onChange={this.onSearchHandler}
                required
              />
            </div>
            <MemoListActive
              memos={this.props.memos}
              onDeleteActionHandler={this.props.onDeleteActionClicked}
              onArchieveActionHandler={this.props.onArchieveActionClicked}
            />
            <MemoListArchieved
              memos={this.props.memos}
              onDeleteActionHandler={this.props.onDeleteActionClicked}
              onArchieveActionHandler={this.props.onArchieveActionClicked}
            />
          </section>
        )
      }
}


export default MemoList
