'use client'

import { useState } from "react"

export default function Description({ children }) {
    const [showMore, setShowMore] = useState(false)

    function toggleShowMore() {
        setShowMore(prev => !prev)
    }
    return (
        <>
            <p className={`text-sm leading-6 ${showMore ? 'line-clamp-none' : 'line-clamp-[10]'}`}>
                {children}
            </p>
            <button aria-label="Se mere" onClick={toggleShowMore} className="text-sm font-medium text-primary">{showMore ? ' Se mindre' : ' Læs mere'}</button>
        </>
    )
}