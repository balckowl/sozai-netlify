import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const MoreSozaiBtn = () => {
    return (
        <div>
            <div className="container mx-auto px-[15px]">
                <div className="flex justify-center pb-[100px]">
                    <Link href="/all-sozai">
                        <Button  className="py-[30px] px-[60px] rounded-md flex items-center gap-2">
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