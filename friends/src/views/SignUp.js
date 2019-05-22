import React from 'react'

export default function SignUp() {
  return (
    <div className='signupForm'>
    <form>
        <input type='text' placeholder='name'></input>
        <input type='email' placeholder='email'></input>
        <input type='text' placeholder='username'></input>
        <input type='password' placeholder='password'></input>
        <button>Submit</button>
    </form>
  </div>
  )
}
