'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { decryptData, encryptData } from '@/lib/utils'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [usersFavoriteHomes, setUsersFavoriteHomes] = useState([])
  const [emailIsSubscribing, setEmailIsSubscribing] = useState(() => {
    const savedSubscriptions = localStorage.getItem('emailIsSubscribing');
    return savedSubscriptions ? decryptData(savedSubscriptions) : [];
  })

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('/api/auth', { method: 'GET' })
        if (response.ok) {
          const { authenticated, homes, email } = await response.json()
          if (authenticated) {
            setUser({ homes, email })
          } else {
            setUser(null)
          }
        } else {
          setUser(null)
        }
      } catch (error) {
        console.error('Error fetching user:', error)
        setUser(null)
      }
    }

    fetchUser()
  }, [])


  useEffect(() => {
    if (user?.homes) {
      setUsersFavoriteHomes(user.homes)
    }
  }, [user])

  function updateEmailIsSubscribing(isSubscribing, email) {
    setEmailIsSubscribing((prev) => {
      const existingIndex = prev.findIndex((entry) => entry.email === email);
      let updatedSubscriptions;

      if (existingIndex !== -1) {
        updatedSubscriptions = [...prev];
        updatedSubscriptions[existingIndex].isSubscribing = isSubscribing;
      } else {
        updatedSubscriptions = [...prev, { email, isSubscribing }];
      }

      const encryptedData = encryptData(updatedSubscriptions)
      localStorage.setItem('emailIsSubscribing', encryptedData)

      return updatedSubscriptions;
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user, setUser,
        usersFavoriteHomes, setUsersFavoriteHomes,
        emailIsSubscribing, updateEmailIsSubscribing
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}