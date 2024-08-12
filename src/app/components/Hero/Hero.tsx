import Image from "next/image";

const Hero = async () => {

    return (
        <div>
            <Image src="/images/hero-4.png" width={1200} height={700} alt="hero" className="w-full h-full object-cover" priority/>
        </div>
    )
}

export default Hero
