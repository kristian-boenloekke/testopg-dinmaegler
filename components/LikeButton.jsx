'use client'
import { Heart } from "lucide-react";
import { useState } from "react";
export default function LikeButton({ className}) {
    const [favorite, setFavorite] = useState(false)

    function handleToggle() {
        setFavorite(prev => !prev)
    }
    return <button onClick={handleToggle} className={`bg-white rounded-full p-2 ${className}`}>
        {favorite ? <Heart size={15} fill="black" /> : <Heart size={15} />}
    </button>
}