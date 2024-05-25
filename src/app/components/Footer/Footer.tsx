import { getAllCategoryList, getAllTagList } from "@/libs/microcms"
import CategorList from "../CategoryList/CategoryList"
import TagList from "../TagList/TagList"
import Link from "next/link"
import Image from "next/image"

const Footer = async () => {
    const Categories = await getAllCategoryList()
    const Tags = await getAllTagList()

    return (
        <div id="footer">
            <div className="w-[85%] mx-auto py-[50px] md:pt-[50px] md:pb-[100px] border-t-[1px]">
                <h2 className="font-bold text-[20px] md:text-[25px] mb-[30px]">キーワードから探す</h2>
                <div className="mb-[30px]">
                    <CategorList contents={Categories} />
                </div>
                <div className="mb-[50px]">
                    <TagList contents={Tags} />
                </div>
                <Link href="https://x.com/SOZAI2024" target="_blank">
                    <div className="h-[200px] w-full bg-[#FCF5EF] mb-[50px] md:flex items-center justify-center hidden rounded-[10px] duration-300 hover:translate-y-1 cursor-pointer">
                        <Image src="/banner.png" width={1200} height={200} alt="" className="w-full rounded-[10px]" />
                    </div>
                    <div className="h-full w-full bg-[#FCF5EF] mb-[50px] flex items-center justify-center md:hidden rounded-[10px] cursor-pointer">
                        <Image src="/banner2.png" width={400} height={300} alt="" className="w-full rounded-[10px]" />
                    </div>
                </Link>
                <div className="border-t-[1px] border-[#eee] py-[20px] flex justify-between flex-col md:flex-row gap-[50px]">
                    <div className="flex gap-2 flex-wrap">
                        <Link href="/guide" className="text-[12px] hover:underline">利用規約</Link>
                        <Link href="/private-policy" className="text-[12px] hover:underline">プライバシーポリシー</Link>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4NYZMUFOzpNHSKoBJ7_cVoz2SskgKeAWwl7W0Kqr2FHt4ow/viewform" className="text-[12px] hover:underline" target="_blank">イラストリクエスト</a>
                        <a href="https://x.com/SOZAI2024" className="text-[12px] hover:underline" target="_blank">X(旧Twitter)</a>
                    </div>
                    <p className="text-[12px] text-center">&copy; SOZAI 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footer