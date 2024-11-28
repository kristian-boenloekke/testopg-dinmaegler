import CardAgent from '@/components/CardAgent';
import EstateMenu from '../_components/EstateMenu';
import Image from 'next/image'
import DetailTable from '../_components/DetailTable';
import CardEstate from '@/components/CardEstate';
import Description from '../_components/Description';


export async function generateStaticParams() {
    const homes = await fetch('https://dinmaegler.onrender.com/homes')
      .then(r => r.json())
    
    return homes.map((home) => ({
      id: home.id.toString(),
    }))
  }
export default async function Home({ params }) {
    const awaitedParams = await params
    const id = awaitedParams.id
    const home = await fetch(`https://dinmaegler.onrender.com/homes/${id}`).then(r => r.json())
    const homes = await fetch('https://dinmaegler.onrender.com/homes').then(r => r.json())
    
    


    return (
        <>

            <Image
                src={home.images[0].url}
                alt={home.images[0].name}
                width={1400}
                height={934}
                className='w-[100vw] max-h-[500px] object-cover'
                priority
            />


            <section className='px-global md:py-8'>
                <div className='w-full flex justify-center md:hidden py-2'>
                    <EstateMenu home={home} />
                </div>
                <div className='flex justify-between flex-wrap items-center border-b border-gray-300 pb-4'>
                    <div className='font-semibold'>
                        <h2>{home.adress1}</h2>
                        <p>{home.postalcode} {home.city}</p>
                    </div>
                    <div className='hidden md:block'>
                        <EstateMenu home={home} />
                    </div>
                    <p className='font-semibold text-2xl'>Kr. {home.price.toLocaleString("da-DK")}</p>
                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-semibold text-sm py-4">
                    <DetailTable home={home} />
                </div>
            </section>

            <div className='px-global pb-10 md:pb-20 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-12'>
                <section>
                    <h2 className='text-primary2 text-2xl font-semibold pb-4'>Beskrivelse</h2>
                    <Description>{home.description}</Description>
                </section>

                <section>
                    <h2 className='text-primary2 text-2xl font-semibold pb-4'>Ansvarlig mægler</h2>
                    <div className='border'>
                    <CardAgent agent={home.agent} variant />
                    </div>
                </section>
            </div>
            <ul className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar shadow-xl">
                {homes.map((home) => (
                    <li key={home.id} className="inline-block">
                        <CardEstate home={home} variant="small" />
                    </li>
                ))}
            </ul>
        </>
    )
}