import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

const Headar = () => {
    return (
        <div className="h-[80px] border-b-[1px]">
            <div className="w-[90%] lg:w-[85%] max-w-[1300px] flex items-center justify-between mx-auto h-full">
                <Link href="/">
                    <h1 className="text-[30px] text-bold font-bold">SOZ<span className="text-red-300">AI</span></h1>
                </Link>
                <ul className="md:flex items-center gap-4 hidden">
                    <li>
                        <Link href="/all-sozai/1">
                            全ての素材
                        </Link>
                    </li>
                    <li>
                        <Link href="#footer">
                            キーワード
                        </Link>
                    </li>
                    <li>
                        <ModeToggle />
                    </li>
                </ul>

                <div className="md:hidden">
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default Headar
