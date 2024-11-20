import BannerHeading from "@/components/BannerHeading";
import CardEstate from "@/components/CardEstate";

export default async function Favorites() {

    const homes = await fetch('https://dinmaegler.onrender.com/homes').then(r => r.json())
    
    return (
        <>
            <BannerHeading heading="Mine favoritter" />

            <ul className="flex flex-col gap-6 global-padding">
                {homes.map((home) => (
                    <li key={home.id}>
                        <CardEstate home={home} variant="favorite" />
                    </li>
                ))}
            </ul>

        </>
    )
}