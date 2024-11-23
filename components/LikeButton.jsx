'use client'
import { useAuth } from "@/contexts/AuthProvider"
import { getCurrentUser } from "@/lib/auth"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"


export default function LikeButton({ className, variant = false }) {
    const [favorite, setFavorite] = useState(false)
    const { user } = useAuth()



    function handleToggle() {
        if (!user) {
            alert('Please log in to like items.')
            return
        }
        setFavorite((prev) => !prev)
    }

    if (!user) {
        return null
    }

    if (variant) {
        return (
            <button
                onClick={handleToggle}
            >
                <svg className={`${className} ${favorite ? 'fill-[#7B7B7B]' : ''}`} width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M31.0355 1.47998C24.4845 1.47998 21.2554 7.93814 21.2554 7.93814C21.2554 7.93814 18.0263 1.47998 11.4753 1.47998C6.15137 1.47998 1.93541 5.93409 1.88091 11.249C1.76991 22.2813 10.6327 30.127 20.3472 36.7203C20.615 36.9025 20.9315 37 21.2554 37C21.5793 37 21.8957 36.9025 22.1636 36.7203C31.877 30.127 40.7399 22.2813 40.6299 11.249C40.5754 5.93409 36.3594 1.47998 31.0355 1.47998V1.47998Z" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        )
    }

    return (
        <button
            onClick={handleToggle}
            className={`bg-white rounded-full p-2 ${className}`}
        >
            {favorite ? <Heart size={15} fill="black" /> : <Heart size={15} />}
        </button>
    )
}