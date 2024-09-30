import { getAllCategoryList, getAllTagList } from "@/libs/microcms"
import CategorList from "../CategoryList/CategoryList"
import TagList from "../TagList/TagList"
import Link from "next/link"
import GoogleAd from "../Adsense/Adsense"

const Footer = async () => {
    const Categories = await getAllCategoryList()
    const Tags = await getAllTagList()

    return (
        <div id="footer">
            <div className="w-[90%] lg:w-[85%] max-w-[1300px] mx-auto py-[40px] lg:pt-[50px] md:pb-[100px] border-t-[1px]">
                <h2 className="font-bold text-[20px] md:text-[25px] mb-[30px]">キーワードから探す</h2>
                <div className="mb-[30px]">
                    <CategorList contents={Categories} />
                </div>
                <div className="mb-[30px]">
                    <TagList contents={Tags} />
                </div>
                {/* <div className="mb-[30px]">
                    <GoogleAd slot="5670123173" />
                </div> */}
                <div className="border-t-[1px] py-[20px] flex justify-between flex-col md:flex-row gap-[50px]">
                    <div className="flex gap-2 flex-wrap">
                        <Link href="/about" className="text-[12px] hover:underline">SOZAIついて</Link>
                        <Link href="/guide" className="text-[12px] hover:underline">利用規約</Link>
                        <Link href="/private-policy" className="text-[12px] hover:underline">プライバシーポリシー</Link>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdcERTBs7fiL-pnQZo3gTykis77ECGtn6_nCpIuFtoQKXsAXA/viewform" className="text-[12px] hover:underline" target="_blank">お問合せフォーム</a>
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
