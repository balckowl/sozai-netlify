import ExportedImage from "next-image-export-optimizer";

const Hero = async () => {

    return (
        <div className="h-[calc(100vh-80px)]">
            <ExportedImage src="/images/hero-3.png" width={1200} height={700} alt="hero" className="w-full h-[100%] object-cover" priority/>
        </div>
    )
}

export default Hero
