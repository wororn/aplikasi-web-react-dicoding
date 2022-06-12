import React from 'react'
import MemoForm from '../memo/MemoForm'
import MemoList from '../memo/MemoList'
import { getInitialData } from '../../utils/index'
class Body extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          initialData: getInitialData(),
          memos: getInitialData()
        }
          this.onCreateMemoHandler = this.onCreateMemoHandler.bind(this)
          this.resetMemosData = this.resetMemosData.bind(this)
          this.onSearchingHandler = this.onSearchingHandler.bind(this)
          this.onArchieveActionClicked = this.onArchieveActionClicked.bind(this)
          this.onDeleteActionClicked = this.onDeleteActionClicked.bind(this)

}

resetMemosData () {
    this.setState(prevState => {
      return {
        ...prevState,
        memos: this.state.initialData
      }
    })
  }

  onSearchingHandler (keyword) {
    this.resetMemosData()

    this.setState(prevState => {
      return {
        ...prevState,
        memos: prevState.memos.filter(memo =>
          memo.title.toLowerCase().includes(keyword.toLowerCase())
        )
      }
    })
  }

  onCreateMemoHandler ({ title, body }) {
    this.setState(prevState => {
      const newMemos = [
        ...prevState.memos,
        {
          id: +new Date(),
          title: title,
          body: body,
          createdAt: new Date(),
          isArchieved: false
        }
      ]

      return {
        initialData: newMemos,
        memos: newMemos
      }
    })
  }


  onArchieveActionClicked (id) {
    const memos = this.state.memos.map(memo => {
      if (memo.id === id) {
        return { ...memo, isArchieved: !memo.isArchieved }
      }

      return memo
    })

    this.setState(() => {
      return {
        initialData: memos,
        memos: memos
      }
    })
  }

  
  onDeleteActionClicked (id) {
    const isAllowed = window.confirm(
      'Apakah Anda Yakin Ingin Menghapus Catatan?'
    )

    if (isAllowed) {
      const memos = this.state.memos.filter(memo => memo.id !== id)

      this.setState(() => {
        return {
          initialData: memos,
          memos: memos
        }
      })
    }
  }

  render () {
    return (
      <main className='body-app'>
        <MemoForm addMemo={this.onCreateMemoHandler} />
        <MemoList
          memos={this.state.memos}
          onSearchingHandler={this.onSearchingHandler}
          onArchieveActionClicked={this.onArchieveActionClicked}
          onDeleteActionClicked={this.onDeleteActionClicked}
        />
      </main>
    )
  }

}
export default Body