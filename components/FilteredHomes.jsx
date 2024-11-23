

'use client'
import { useState } from 'react'
import SearchFilter from './SearchFilter'
import CardEstate from './CardEstate'
import Section from './Section'

export default function FilteredHomes({ initialHomes }) {
    const [filters, setFilters] = useState({
        type: '',
        minPrice: 0,
        maxPrice: 12000000
    })

    const filteredHomes = initialHomes.filter(home => {
        const matchesType = !filters.type || home.type === filters.type
        const matchesPrice = home.price >= filters.minPrice && home.price <= filters.maxPrice;
        return matchesType && matchesPrice
    })

    return (
        <>
            <SearchFilter filters={filters} setFilters={setFilters} />
            
            <Section>
                <ul className='gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
                    {filteredHomes.map((home) => (
                        <li key={home.id} className='w-full'>
                            <CardEstate home={home} />
                        </li>
                    ))}
                </ul>
            </Section>
            
        </>
    )
}

// 'use client'
// import { useState } from 'react'
// import SearchFilter from './SearchFilter'
// import CardEstate from './CardEstate'
// import Section from './Section'

// export default function FilteredHomes({ initialHomes }) {
//     const [filters, setFilters] = useState({
//         type: '',
//         minPrice: 0,
//         maxPrice: 12000000
//     })

//     const filteredHomes = initialHomes.filter(home => {
//         const matchesType = !filters.type || home.type === filters.type
//         const matchesPrice = home.price >= filters.minPrice && home.price <= filters.maxPrice;
//         return matchesType && matchesPrice
//     })

//     return (
//         <>
//             <SearchFilter filters={filters} setFilters={setFilters} />
            
//             <Section>
//                 <ul className='gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
//                     {filteredHomes.map((home) => (
//                         <li key={home.id} className='w-full'>
//                             <CardEstate home={home} />
//                         </li>
//                     ))}
//                 </ul>
//             </Section>
            
//         </>
//     )
// }



// import SearchFilter from './SearchFilter';
// import CardEstate from './CardEstate';
// import Section from './Section';

// export default async function FilteredHomes({ searchParams }) {
//     const { type = '', minPrice = 0, maxPrice = 12000000 } = searchParams;

//     // Construct the query string for the API
//     const params = new URLSearchParams();
//     if (type) params.append('type_eq', type);
//     params.append('price_gte', minPrice);
//     params.append('price_lte', maxPrice);

//     // Fetch filtered homes from the API
//     const response = await fetch(
//         `https://dinmaegler.onrender.com/homes?${params.toString()}`,
//         { cache: 'no-store' } // Disable caching for dynamic results
//     );
//     const homes = await response.json();

//     return (
//         <>
//             <SearchFilter
//                 filters={{
//                     type,
//                     minPrice: Number(minPrice),
//                     maxPrice: Number(maxPrice),
//                 }}
//             />
//             <Section>
//                 <ul className='gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
//                     {homes.map((home) => (
//                         <li key={home.id} className='w-full'>
//                             <CardEstate home={home} />
//                         </li>
//                     ))}
//                 </ul>
//             </Section>
//         </>
//     );
// }