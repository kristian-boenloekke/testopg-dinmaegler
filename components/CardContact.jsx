
const contactInfo = [
    { "image": "/img/phone.svg", "title": "Ring til os", "contact": "+45 7070 4000" },
    { "image": "/img/paper-plane.svg", "title": "Send en mail", "contact": "4000@dinmaegler.com" },
    { "image": "/img/flag-white.svg", "title": "Besøg butikken", "contact": "Stændertorvet 78, 4000 Roskilde" },
]

export default function CardContact({ variant = false }) {
    return (
        <>
            {variant ?
                <ul className="flex flex-col gap-4 p-4 border border-gray-300 w-full h-full">
                    {contactInfo.map((info, index) => (
                        <li
                            key={index} className="flex flex-col gap-2 items-center justify-center border-b border-gray-300 py-6 last-of-type:border-none last-of-type:pb-0">
                            <img src={info.image} alt="contact" className="w-8 h-8 p-2 bg-primary rounded-full" />
                            <p className="font-semibold">{info.title}</p>
                            <p className="max-w-32 text-center">{info.contact}</p>
                        </li>
                    ))}
                </ul>
                :
                <article className="p-8 shadow-md bg-white max-w-[22rem] self-center">
                    <ul className="flex flex-col gap-4 ">
                        {contactInfo.map((info, index) => (
                            <li
                                key={index} className="flex gap-2 items-center py-2">
                                <img src={info.image} alt="contact" className="w-10 h-10 p-2 bg-primary rounded-full" />
                                <div>
                                    <p className="text-primary3 text-sm">{info.title}</p>
                                    <p className="font-semibold">{info.contact}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h1 className="py-2">Din Mægler Roskilde, er din boligbutik i lokalområdet</h1>
                </article>
            }
        </>
    )
}