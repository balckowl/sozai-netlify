import Image from "next/image"
import Link from "next/link"

const Category = ({ src, name, href }: { src: string, name: string, href: string }) => {
    return (
        <Link href={`/category/${href}`}>
            <div className="border-[2px] px-2 py-1 md:px-3 md:py-2 rounded-[20px] flex items-center gap-2 transition duration-300">
                <div className="rounded-full border-2">
                    <Image src={src} width={20} height={20} alt="" className="w-[15px] h-[15px] md:w-[20px] md:h-[20px] rounded-full"/>
                </div>
                <p className="text-[15px] md:text-[17px]">{name}</p>
            </div>
        </Link>
    )
}

export default Category