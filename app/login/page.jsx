// app/login/page.js
'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

async function loginAction(formData) {
  'use server'
  
  const email = formData.get('email')
  const password = formData.get('password')

  try {
    const res = await fetch('https://dinmaegler.onrender.com/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      return { error: data.message || 'Authentication failed' }
    }

    // Await the cookie setting
    await cookies().set('token', data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    })

    // For redirect to work in server actions, we need to return a redirect object
    return redirect('/')
  } catch (error) {
    return { error: 'An error occurred during login' }
  }
}

export default async function Login() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <form action={loginAction} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            required
            className='border border-gray-300 rounded-md px-4 py-2' 
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            required
            className='border border-gray-300 rounded-md px-4 py-2'
          />
        </div>

        <button 
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Log in
        </button>
      </form>
    </div>
  )
}