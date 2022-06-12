import React from 'react'


class MemoForm extends React.Component {
    constructor (props) {
        super(props)
    
    this.state = {
    title: '',
    body: ''
  }

  this.OnLimitTitleHandler = this.OnLimitTitleHandler.bind(this)
  this.onChangeEventHandler = this.onChangeEventHandler.bind(this)
  this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
   
}

  OnLimitTitleHandler (event) {
    const inputTitle = event.target.value
    let title = ''

    if (inputTitle.length > 35) {
      title = inputTitle.substring(0, 35)
    } else {
      title = inputTitle
    }

    this.setState(() => {
      return {
        title: title
      }
    })
  }

  onChangeEventHandler (event) {
    this.setState(prevState => {
      return {
        ...prevState,
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler (event) {
    event.preventDefault()
    this.props.addMemo(this.state)
    this.setState(() => {
      return {
        title: '',
        body: ''
      }
    })
  }


  render () {
    return (
      <aside className='memo-form'>
        <h1 className='spacing'>Buat Catatan</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className='memo-form__title-limit'>
            Sisa karakter: {this.state.title.length}/35
          </p>
          <input
            className='memo-form__title'
            type='text'
            placeholder='Tulis Judul ...'
            value={this.state.title}
            onChange={this.OnLimitTitleHandler}
            required
          />
          <textarea
            rows='10'
            className='memo-form__body'
            type='text'
            placeholder='Tuliskan Catatan Disini ...'
            value={this.state.body}
            onChange={this.onChangeEventHandler}
            resize='false'
            required
          ></textarea>
          <button type='submit'>Simpan</button>
        </form>
      </aside>
    )
  }
}

export default MemoForm