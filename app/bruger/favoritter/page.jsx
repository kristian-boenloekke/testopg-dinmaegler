import BannerHeading from "@/components/BannerHeading";
import CardEstate from "@/components/CardEstate";
import { Unsubscribe } from "@/components/SubscriptionRCC";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";


export default async function Favorites() {
    const user = await getCurrentUser()
    const usersFavoriteHomes = user?.homes || []
    const homes = await fetch('https://dinmaegler.onrender.com/homes').then(r => r.json())
    const favoriteHomes = homes.filter(home => usersFavoriteHomes.includes(home.id))
    

    if (!user) {
        redirect('/login')
    }
    
    return (
        <>
            <BannerHeading heading="Mine favoritter" />
            <Unsubscribe />

            <ul className="flex flex-col gap-6 global-padding">
                {favoriteHomes.map((home) => (
                    <li key={home.id}>
                        <CardEstate home={home} variant="favorite" />
                    </li>
                ))}
            </ul>
        </>
    )
}