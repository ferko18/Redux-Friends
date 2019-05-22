import React from 'react'
import'./view.css'

export default function Login() {
  return (
    <div className='loginForm'>
      <form>
          <input type='text' placeholder='username'></input>
          <input type='password' placeholder='password'></input>
          <button>Sign In</button>
      </form>
    </div>
  )
}
