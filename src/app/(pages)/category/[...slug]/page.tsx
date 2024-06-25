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
// export const dynamic = 'force-static'

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

    const params = [];

    for (const category of allCategories) {
        let page = 1;
        let sozaies;
        do {
            const offset = (page - 1) * 9;
            sozaies = await getList({ filters: `category[contains]${category.id}`, limit: 9, offset });
            if (sozaies.contents.length > 0) {
                params.push({ slug: [category.id, String(page)] });
            }
            page++;
        } while (sozaies.contents.length > 0);
    }

    return params;
}

const CategoryDetail = async ({ params }: { params: { slug: string[] } }) => {

    const { slug } = params

    const page = slug[1] ? parseInt(slug[1], 10) : 1
    const limit = 9;
    const offset = (page - 1) * limit;
    const sozaies = await getList({ filters: `category[contains]${slug[0]}`, limit, offset })
    const Category = await getCategoryList({ filters: `id[equals]${slug[0]}` })

    return (
        <div>
            <SozaiList title={Category.contents[0]?.name} contents={sozaies.contents} />
            <Pagination currentPage={page} totalCount={sozaies.totalCount} limit={limit} segment={`category/${slug[0]}`} />
        </div>
    )
}

export default CategoryDetail
