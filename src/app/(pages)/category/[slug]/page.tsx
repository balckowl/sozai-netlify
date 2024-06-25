import Pagination from "@/app/components/Pagination/Pagination";
import SozaiList from "@/app/components/SozaiList/SozaiList"
import { Category, getCategoryList, getList } from "@/libs/microcms"

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {

    const { slug } = params
    const Category = await getCategoryList({ filters: `id[equals]${slug}` })

    return {
        title: `SOZAI | カテゴリー「${Category.contents[0]?.name}」`,
        description: 'カラフルな差し色が特徴の高品質フリーイラスト素材サイト。どんな場面でも合わせやすい素材。多様な形式でのダウンロードが可能。',
        openGraph: {
            title: `SOZAI | カテゴリー「${Category.contents[0]?.name}」`,
            description: 'カラフルな差し色が特徴の高品質フリーイラスト素材サイト。どんな場面でも合わせやすい素材。多様な形式でのダウンロードが可能。',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/category/${Category.contents[0]?.id}`,
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
}

//ssgの設定
export const dynamic = 'force-static'

export async function generateStaticParams() {

    let offset = 0;
    const limit = 10;  // microCMSからの取得上限
    let allCategories: Category[] = [];
    let totalCount = 0;

    do {
        const response = await getCategoryList({ limit: limit, offset: offset });
        allCategories = allCategories.concat(response.contents);
        totalCount = response.totalCount; // 総アイテム数を更新
        offset += limit; // 次のページへのオフセットを更新
    } while (allCategories.length < totalCount)

    return allCategories.map(category => ({
        slug: category.id
    }))

}

const CategoryDetail = async ({ params, searchParams }: { params: { slug: string }, searchParams: { page: string } }) => {

    const { slug } = params


    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const limit = 9;
    const offset = (page - 1) * limit;
    const Sozaies = await getList({ filters: `category[contains]${slug}`, limit, offset })
    const Category = await getCategoryList({ filters: `id[equals]${slug}` })

    return (
        <div>
            <SozaiList title={Category.contents[0]?.name} contents={Sozaies.contents} />
            <Pagination currentPage={page} totalCount={Sozaies.totalCount} limit={limit} />
        </div>
    )
}

export default CategoryDetail
