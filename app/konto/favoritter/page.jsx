import BannerHeading from "@/components/BannerHeading";
import { redirect } from "next/navigation";
import FavoriteHomes from "../_components/FavoriteHomes";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: 'Mine favoritter',
    alternates: {
        canonical: 'https://dinmaegler.vercel.app/bruger/favoritter',
    }
}


export default async function Favorites() {
    const user  = await getCurrentUser()
    const homes = await fetch('https://dinmaegler.onrender.com/homes').then(r => r.json())

    if (!user) {
        redirect('/login')
        
    }
    
    return (
        <>
            <BannerHeading heading="Mine favoritter" />
            <div className="py-6 px-10 w-fit">
            <Link href={'/konto'} className="text-lg text-primary flex gap-1 items-center hover:font-medium"> <ArrowLeft /> Min konto</Link>
            </div>
            <FavoriteHomes homes={homes} />
        </>
    )
}