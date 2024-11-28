import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const MoreSozaiBtn = () => {
    return (
        <div>
            <div className="container mx-auto px-[15px]">
                <div className="flex justify-center pb-[100px]">
                    <Link href="/all-sozai/1">
                        <Button  className="py-[30px] px-[60px] rounded-md flex items-center gap-2 bg-red-600 text-white">
                            <p className="text-[13px]">すべての素材を見る</p>
                            <ArrowRight width={18} height={18} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MoreSozaiBtn
