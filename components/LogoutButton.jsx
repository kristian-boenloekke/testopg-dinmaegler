'use client';

import { logout } from '@/lib/auth';

export default function LogoutButton({className, children}) {
  return (
    <button onClick={() => logout()} className={`${className}`}>
      {children}
    </button>
  )
}