import BannerHeading from '@/components/BannerHeading'
import FilteredHomes from '@/components/FilteredHomes'

export const metadata = {
    title: 'Boliger',
}
export default async function HomesPage() {
    const homes = await fetch('https://dinmaegler.onrender.com/homes').then(r => r.json())
    
    
    return (
        <>
            <BannerHeading heading="Boliger til salg" />

            <FilteredHomes initialHomes={homes} />
        </>
    )
}