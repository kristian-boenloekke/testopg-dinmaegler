'use client'
import { useAuth } from '@/contexts/AuthProvider'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/contexts/ToastProvider'
import BannerHeading from '@/components/BannerHeading'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  async function handleLogin(e) {
    e.preventDefault()

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      if (!res.ok) {
        throw new Error('Login failed')
        
      }

      const data = await res.json()

      console.log('Login successful:', data)

      setUser(true)
      router.push('/')
    } catch (err) {
      console.error('Login error:', err)
      toast('Noget gik galt. Prøv igen.', { variant: 'destructive' }, { duration: 5000 })
      
    }
  }

  return (
    <>
      <BannerHeading heading="Log ind" />
    <div className="flex w-full justify-center items-center py-20">
      <div className='px-20 p-10 flex flex-col gap-2 shadow-md'>
        <h2 className='text-center text-2xl font-semibold py-4'>Log ind på din konto</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 pb-4">
          
          <label htmlFor="email" className='flex flex-col gap-1 w-full'>
              Email
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              className='border px-4 py-2'
              onChange={(e) => setEmail(e.target.value)} 
              />
          </label>
        

          
          <label htmlFor="password" className="flex flex-col gap-1">
              Password
            <input 
              type="password" 
              id="password" 
              name="password"
              required
              className='border px-4 py-2'
              onChange={(e) => setPassword(e.target.value)}
              />
          </label>
          

          <button 
            type="submit"
            className="bg-primary text-white py-2 px-4"
          >
            Log in
          </button>
        </form>

        <p>Log in med</p>
        <ul className='text-white flex gap-2 w-full'>
          <li className='p-2 px-6 bg-[#DD4B39]'>
            Google
          </li>
          <li className='p-2 px-4 bg-[#3B5999]'>
            Facebook
          </li>
          <li className='p-2 px-6 bg-primary'>
            Twitter
          </li>
        </ul>

      </div>
    </div>
    </>

  )
}

// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'

// async function loginAction(formData) {
//   'use server'
  
//   const email = formData.get('email')
//   const password = formData.get('password')

//   try {
//     const res = await fetch('https://dinmaegler.onrender.com/auth/local', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         identifier: email,
//         password: password,
//       }),
//     })

//     const data = await res.json()

//     if (!res.ok) {
//       return { error: data.message || 'Authentication failed' }
//     }

//     await cookies().set('token', data.jwt, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       path: '/'
//     })

//     return redirect('/')
//   } catch (error) {
//     return { error: 'An error occurred during login' }
//   }
// }

// export default async function Login() {
//   return (
//     <div className="flex w-full h-screen justify-center items-center">
//       <form action={loginAction} className="flex flex-col gap-4">
//         <div className="flex flex-col">
//           <label htmlFor="email">Email</label>
//           <input 
//             type="email" 
//             id="email" 
//             name="email"
//             required
//             className='border border-gray-300 rounded-md px-4 py-2' 
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="password">Password</label>
//           <input 
//             type="password" 
//             id="password" 
//             name="password"
//             required
//             className='border border-gray-300 rounded-md px-4 py-2'
//           />
//         </div>

//         <button 
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Log in
//         </button>
//       </form>
//     </div>
//   )
// }