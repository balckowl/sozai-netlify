import { Button } from "@/components/ui/button";
import { CandyCane, Gift } from "lucide-react";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="flex justify-center bg-red-600">
            <Button variant="link" asChild className="text-white">
                <Link href="/tag/xmas/1" className="font-bold  tracking-widest flex gap-2">
                    <Gift size={20} /> クリスマスイラスト追加しました <CandyCane size={20} />
                </Link>
            </Button>
        </div>
    )
}
