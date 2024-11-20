import BannerHeading from "@/components/BannerHeading";

export default async function Medarbejder({ params }) {
    const awaitedParams = await params
    const id = awaitedParams.id
    const agent = await fetch(`https://dinmaegler.onrender.com/agents/${id}`) 
    console.log("agentData:", agent);
    

    return (
        <>
            <BannerHeading heading="Kontakt en medarbejder" />
        </>
    )
}