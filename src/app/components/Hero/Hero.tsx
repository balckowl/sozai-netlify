import Image from "next/image";

const Hero = async () => {

    return (
        <div>
            <Image src="/images/hero-4.png" width={1200} height={700} alt="hero" className="w-full h-full object-cover hidden md:block" priority/>
            <Image src="/images/hero-5-sm.png" width={1200} height={700} alt="hero" className="w-full h-full object-cover md:hidden" priority/>
        </div>
    )
}

export default Hero
