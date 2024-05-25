import { ArrowRight } from "lucide-react"
import Link from "next/link"

const MoreSozaiBtn = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-[15px]">
                <div className="flex justify-center pb-[100px]">
                    <Link href="/all-sozai">
                        <button className="bg-black text-white py-[20px] px-[60px] rounded-md flex items-center gap-2">
                            <p className="text-[13px]">すべてのSOZAIを見る</p>
                            <ArrowRight width={18} height={18} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MoreSozaiBtn