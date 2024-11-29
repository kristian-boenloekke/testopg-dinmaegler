import BannerHeading from '@/components/BannerHeading'
import FilteredHomes from '@/components/FilteredHomes'
import { getCurrentUser } from '@/lib/auth'

export const metadata = {
    title: 'Boliger',
    alternates: {
        canonical: 'https://dinmaegler.vercel.app/boliger',
    }
}
export default async function HomesPage() {
    const homes = await fetch('https://dinmaegler.onrender.com/homes').then(r => r.json())
    const user = await getCurrentUser()
    // console.log("currentUSer", user);
    
    
    return (
        <>
            <BannerHeading heading="Boliger til salg" />

            <FilteredHomes initialHomes={homes} />
        </>
    )
}