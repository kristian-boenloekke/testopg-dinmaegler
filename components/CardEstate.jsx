import Image from "next/image";
import LikeButton from "./LikeButton";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";

// A: #10AC84
// B: #F2C94C
// C: #F2994A
// D: #EB5757


export default function CardEstate({ home, variant = false }) {
    // const user = await getCurrentUser()

    const energylabelColors = {
        "A": "#10AC84",
        "B": "#F2C94C",
        "C": "#F2994A",
        "D": "#EB5757"
    }
    return (
        <>
            {variant === 'favorite' ?
                <article className={`flex flex-col shadow-md 
                    lg:p-4 lg:flex-row lg:justify-between`
                    }>
                    <Link href={`/boliger/${home.id}`} className="flex flex-col lg:flex-row lg:justify-between">
                        <Image src={home.images[0].url} alt={home.images[0].name} width={1400} height={934}
                            className=" w-full h-40 object-cover lg:h-40 lg:min-w-64"
                        />
                        <div className="flex flex-col py-2 px-4 lg:gap-4 lg:min-w-48">
                            <h2 className="font-semibold">{home.adress1}</h2>
                            <p className="flex gap-1 text-sm text-primary3"><span>{home.postalcode}</span>{home.city}</p>
                            <div className="flex gap-1 text-sm pb-2 ">
                                <p className="font-semibold">{home.type}</p>
                                <span>•</span>
                                <p >{home.cost.toLocaleString("da-DK")} kr.</p>
                            </div>

                        </div>
                    </Link>
                    <div className="flex flex-col lg:justify-between lg:w-1/2">
                        <div className="flex justify-between px-2 lg:items-start ">
                            <div className="flex font-semibold items-center gap-2">
                                <span
                                    style={{ backgroundColor: energylabelColors[home.energylabel] }}
                                    className="text-white font-semibold px-2">
                                    {home.energylabel}
                                </span>
                                <p className="text-xs text-primary3">
                                    {home.rooms} værelser • {home.livingspace} m²
                                </p>
                            </div>
                            <p className="font-semibold py-1 lg:p-0">Kr. {home.price.toLocaleString("da-DK")}</p>
                        </div>
                        <button className="bg-primary text-white font-semibold p-2 mt-2 lg:w-40 lg:self-end">Fjern fra favoritter</button>
                    </div>
                </article>


                : variant === 'small' ?
                    <article className="flex flex-col shadow-md"></article>
                
                
                    :
                    <article className="flex flex-col shadow-md">
                        <div className="relative w-full h-full">
                            <Image src={home.images[0].url} alt={home.images[0].name} width={1400} height={934}
                                className="w-full h-40 object-cover"
                            />
                            {/* {user && <LikeButton className={"absolute top-2 right-2"} />} */}
                        </div>
                        <Link href={`/boliger/${home.id}`}>
                            <div className="flex flex-col p-4 gap-2">
                                <h2 className="font-semibold">{home.adress1}</h2>
                                <p className="flex gap-1 text-xs text-primary3"><span>{home.postalcode}</span>{home.city}</p>
                                <div className="flex gap-1 text-xs border-b border-gray-300 pb-2 ">
                                    <p className="font-semibold">{home.type}</p>
                                    <span>•</span>
                                    <p >{home.cost.toLocaleString("da-DK")} kr.</p>
                                </div>
                                <div className="flex flex-row justify-between flex-wrap xl:flex-col">
                                    <div className="flex items-center gap-3 pr-3">
                                        <span style={{ backgroundColor: energylabelColors[home.energylabel] }} className="text-white font-semibold px-2">{home.energylabel}</span>
                                        <p className="text-xs text-primary3">
                                            {home.rooms} værelser • {home.livingspace} m²
                                        </p>
                                    </div>
                                    <p className="font-semibold self-end py-1">Kr. {home.price.toLocaleString("da-DK")}</p>
                                </div>
                            </div>
                        </Link>
                    </article>
            }
        </>

    )
}