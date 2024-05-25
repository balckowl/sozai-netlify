import Image from "next/image"

const Hero = async () => {

    return (
        <div className="h-[calc(100vh-80px)]">
            <Image src="/images/hero-3.png" width={1200} height={700} alt="" className="w-full h-[100%] object-cover" />
        </div>
    )
}

export default Hero