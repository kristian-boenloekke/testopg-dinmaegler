import BannerHeading from "@/components/BannerHeading"
import CardAgent from "@/components/CardAgent"


export const metadata = {
    title: 'Medarbejdere',
    alternate: {
        canonical: 'https://dinmaegler.vercel.app/medarbejdere',
    }
}
export default async function Medarbejdere() {
    const agents = await fetch('https://dinmaegler.onrender.com/agents').then(r => r.json())
    return (
        <>
            <BannerHeading heading="Medarbejdere i Roskilde" />

            <section className="flex w-full justify-center items-center p-20">

                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:w-[70vw]'>
                    {agents.map((agent) => (
                        <li key={agent.id} className='w-full'>
                            <CardAgent agent={agent} />

                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}