import { getCurrentUser } from '@/lib/auth'

export async function GET() {
    const user = await getCurrentUser()
  
    if (user) {
      return new Response(
        JSON.stringify({ authenticated: true, userId: user.id }), 
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    } else {
      return new Response(JSON.stringify({ authenticated: false }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }