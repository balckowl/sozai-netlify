import Pagination from "@/app/components/Pagination/Pagination";
import SozaiList from "@/app/components/SozaiList/SozaiList"
import { Sozai, getList } from "@/libs/microcms"
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

export const dynamic = 'force-static'

export async function generateStaticParams() {

    const limit = 10;
    let offset = 0;
    let sozaies: Sozai[] = []
    let totalCount = 0;

    do {
        const response = await getList({ limit: limit, offset: offset });
        sozaies = sozaies.concat(response.contents);
        totalCount = response.totalCount; // 総アイテム数を更新
        offset += limit; // 次のページへのオフセットを更新
    } while (sozaies.length < totalCount)

    return sozaies.map((_, index) => ({
        slug: String(index + 1)
    }))
}

const AllSozai = async ({ params }: { params: { slug: string } }) => {

    const { slug } = params

    const page = slug ? parseInt(slug, 10) : 1;
    const limit = 9;
    const offset = (page - 1) * limit;
    const sozaies = await getList({ limit, offset })

    return (
        <div>
            <SozaiList title="素材一覧" contents={sozaies.contents} />
            <Pagination currentPage={page} totalCount={sozaies.totalCount} limit={limit} segment={`all-sozai`} />
        </div>
    )
}

export default AllSozai
