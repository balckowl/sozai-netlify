import Pagination from "@/app/components/Pagination/Pagination";
import SozaiList from "@/app/components/SozaiList/SozaiList"
import { getList } from "@/libs/microcms"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SOZAI | SOZAI一覧',
    description: 'カラフルな差し色が特徴の高品質フリーイラスト素材サイト。どんな場面でも合わせやすい素材。多様な形式でのダウンロードが可能。',
    openGraph: {
        title: 'SOZAI | SOZAI一覧',
        description: 'カラフルな差し色が特徴の高品質フリーイラスト素材サイト。どんな場面でも合わせやすい素材。多様な形式でのダウンロードが可能。',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/all-sozai`,
        siteName: 'SOZAI',
        images: [
            {
                width: '1200',
                height: '630',
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/ogp/home-ogp.png`
            }
        ],
        locale: 'jp',
        type: 'article',
    }
}

const AllSozai = async ({ searchParams }: { searchParams: { page: string } }) => {

    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const limit = 9;
    const offset = (page - 1) * limit;
    const Sozaies = await getList({ limit, offset })

    return (
        <div>
            <SozaiList title="素材一覧" contents={Sozaies.contents} />
            <Pagination currentPage={page} totalCount={Sozaies.totalCount} limit={limit} />
        </div>
    )
}

export default AllSozai