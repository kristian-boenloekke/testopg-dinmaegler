import BannerHeading from "@/components/BannerHeading";
import CardContact from "@/components/CardContact";
import FormContact from "@/components/FormContact";

const contactInfo = [
    { "image": "/img/phone.svg", "title": "Ring til os", "contact": "+45 7070 4000" },
    { "image": "/img/paper-plane.svg", "title": "Send en mail", "contact": "4000@dinmaegler.com" },
    { "image": "/img/maps-and-flags-1.svg", "title": "Besøg butikken", "contact": "Stændertorvet 78, 4000 Roskilde" },
]

export default function Kontakt() {
    return (
        <>
            <BannerHeading heading="Kontakt os" />

            <section className="px-global">
                <h2 className="text-2xl font-semibold text-primary">Vi sidder klar til at besvare dine spørgsmål</h2>
                <p>
                    Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. 
                    <br/>Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 px-global">
                <div className="md:col-span-2 h-full">
                    <FormContact />
                </div>
                <CardContact variant />

            </section>

            <img src="/img/map.png" alt="map" className="w-full max-h-[40vh] pt-5"/>
        </>
    )
}