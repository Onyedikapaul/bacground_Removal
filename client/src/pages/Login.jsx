import React, { useState } from 'react'

const Login = () => {

    const [state, setState] = useState(false)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

  return (
    <form  className='min-h-[80vh] flex items-center'>
    <div className='flex flex-col gap-3 m-auto  items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-white text-sm shadow-lg bg-blue-700'>
      <p className='text-2xl font-semibold text-black'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
      {
        state === 'Sign Up' ?
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
          : ""
      }
      <div className='w-full'>
        <p>Email</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
      </div>
      <div className='w-full'>
        <p>Password</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
      </div>
      <button type='submit' className='bg-gray-900 text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
      {
        state === 'Sign Up'
          ? <p className='text-black'>Already have an account? <span onClick={() => setState('Login')} className='text-white underline cursor-pointer'>Login here</span></p>
          : <p className='text-black'>Create a new account? <span onClick={() => setState('Sign Up')} className='text-white underline cursor-pointer'>click here</span></p>
      }
    </div>

  </form>
  )
}

export default Login;