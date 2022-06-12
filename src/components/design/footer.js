import React from 'react'

function Footer () {
  return (
    <footer className='footer'>
      Made by &nbsp;
      <a href='https://woro.webs.com' target='_blank' rel='noreferrer'>
        Woro Retnoningsih
      </a>
      &nbsp; © {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
