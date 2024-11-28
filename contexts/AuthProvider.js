'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [usersFavoriteHomes, setUsersFavoriteHomes] = useState([])
  const [userIsSubscribing, setUserIsSubscribing] = useState(false)

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('/api/auth', { method: 'GET' })
        if (response.ok) {
          const { authenticated, userId, homes } = await response.json()
          if (authenticated) {
            setUser({ userId, homes })
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
    // Load the initial state from localStorage
    const savedStatus = localStorage.getItem('userIsSubscribing');
    if (savedStatus !== null) {
        setUserIsSubscribing(JSON.parse(savedStatus));
    }
}, []);

useEffect(() => {
  if (user?.homes) {
    setUsersFavoriteHomes(user.homes);
  }
}, [user]);


function updateUserIsSubscribing(value) {
    setUserIsSubscribing(value);
    localStorage.setItem('userIsSubscribing', JSON.stringify(value));
}

  return (
    <AuthContext.Provider
      value={{
        user, setUser,
        usersFavoriteHomes, setUsersFavoriteHomes,
        userIsSubscribing, updateUserIsSubscribing
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}