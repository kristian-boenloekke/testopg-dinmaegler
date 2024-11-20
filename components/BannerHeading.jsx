export default function BannerHeading({ heading }) {
    return (
        <section className='relative bg-[url("/img/boliger-banner.png")] bg-cover bg-center bg-no-repeat h-[100px] md:h-[120px] flex justify-center items-center'>
            <div className='absolute inset-0 bg-primary bg-opacity-90'></div>
            <h2 className='relative text-white font-semibold text-3xl sm:text-5xl z-10'>{heading}</h2>
        </section>
    )
}