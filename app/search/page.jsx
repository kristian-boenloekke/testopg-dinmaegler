import CardEstate from "@/components/CardEstate";
import SearchForm from "@/components/FormSearch";

export default async function SearchResults({ searchParams }) {
    const awaitedParams = await searchParams
    const query = awaitedParams.query?.toLowerCase() || ''

    const homes = await fetch('https://dinmaegler.onrender.com/homes').then(r => r.json())
    function getNestedValue(obj, key) {
        return key.split('.').reduce((acc, part) => acc && acc[part], obj);
    }

    const searchableFields = [
        "type", 
        "price",
        "postalcode", 
        "rooms", 
        "city",
        "adress1",
        "adress2",
        "built",
        "remodel", 
        "description", 
        "livingspace", 
        "lotsize",
        "agent.name"
    ]

    const filteredHomes = homes.filter((home) =>
        searchableFields.some((field) => {
            const value = getNestedValue(home, field);
    
            if (typeof value === 'string') {
                return value.toLowerCase().includes(query.toLowerCase());
            } else if (typeof value === 'number') {
                return value.toString().includes(query)
            }
    
            return false
        })
    )

    return (
        <div className="min-h-[60vh] px-global global-padding flex flex-col gap-6">
            <SearchForm />
            {filteredHomes.length === 0 ? (
                <p className="text-sm">Ingen boliger matcher &quot;{query}&quot;.</p>
            ) : (
                <div>
                <p className="py-2 text-sm">Boliger som matcher &quot;<span className="font-semibold">{query}</span>&quot;:</p> 
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredHomes.map((home) => (
                        <li key={home.id}>
                            <CardEstate home={home} />
                        </li>
                    ))}
                </ul>
                </div>
            )}
            
        </div>
    )

}