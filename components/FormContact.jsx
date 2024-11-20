export default function FormContact() {
    return (
        <form action="" className="border border-gray-300 p-6 w-full">
            <div className="flex flex-col md:flex-row gap-4 pb-4">
                <label htmlFor="name" className="flex flex-col gap-2 font-semibold w-full">
                    Navn
                    <input
                        type="text"
                        id="name"
                        className="border border-gray-300 p-2 font-normal outline-none"
                        placeholder="Indtast dit navn"
                    />
                </label>
                <label htmlFor="email" className="flex flex-col gap-2 font-semibold  w-full">
                    Email
                    <input
                        type="email"
                        id="email"
                        className="border border-gray-300 p-2 font-normal outline-none"
                        placeholder="Indtast din email"
                    />
                </label>
            </div>
            <div className="flex flex-col gap-4">

                <label htmlFor="subject" className="flex flex-col gap-2 font-semibold">
                    Emne
                    <input
                        type="text"
                        id="subject"
                        className="border border-gray-300 p-2 font-normal outline-none"
                        placeholder="Indtast emne"
                    />
                </label>

                <label htmlFor="message" className="flex flex-col gap-2 font-semibold">
                    Besked
                    <textarea
                        id="message"
                        className="border border-gray-300 p-2 font-normal outline-none min-h-40"
                        placeholder="Indtast emne"
                    />
                </label>
            </div>

            <div className="flex flex-col gap-4 py-2">
                <label htmlFor="newsletter" className="text-sm text-primary3 flex items-center">
                    <input type="checkbox" name="newsletter" id="newsletter" className="mr-2" />
                    Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev
                </label>

                <button
                    type="submit"
                    className="bg-primary text-white py-2 px-4 hover:bg-primary3 self-start"
                >
                    Send Besked
                </button>

            </div>


        </form>
    )
}