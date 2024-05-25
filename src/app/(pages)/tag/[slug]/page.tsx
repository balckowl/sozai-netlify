import Pagination from "@/app/components/Pagination/Pagination";
import SozaiList from "@/app/components/SozaiList/SozaiList"
import { Tag, getList, getTagList } from "@/libs/microcms"

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {

    const { slug } = params
    const Tags = await getTagList({ filters: `id[equals]${slug}` })

    return {
        title: `SOZAI | タグ「${Tags.contents[0]?.name}」`,
        description: 'AIで作ったフリー素材。どんな場面でも合わせやすい素材。PNG、JPG、WEBP、SVG形式でのダウンロードが可能。',
        openGraph: {
            title: `SOZAI | タグ「${Tags.contents[0]?.name}」`,
            description: 'AIで作ったフリー素材。どんな場面でも合わせやすい素材。PNG、JPG、WEBP、SVG形式でのダウンロードが可能。',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/tag/${Tags.contents[0]?.id}`,
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
export const dynamicParams = false

export async function generateStaticParams() {
    let offset = 0;
    const limit = 10;  // microCMSからの取得上限
    let allTags: Tag[] = [];
    let totalCount = 0;

    do {
        const response = await getTagList({ limit: limit, offset: offset });
        allTags = allTags.concat(response.contents);
        totalCount = response.totalCount; // 総アイテム数を更新
        offset += limit; // 次のページへのオフセットを更新
    } while (allTags.length < totalCount)

    return allTags.map(tag => ({
         slug: tag.id 
    }))
}

const TagDetail = async ({ params, searchParams }: { params: { slug: string }, searchParams: { page: string } }) => {

    const { slug } = params

    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const limit = 9;
    const offset = (page - 1) * limit;
    const Sozaies = await getList({ filters: `tags[contains]${slug}`, limit, offset })
    const Tags = await getTagList({ filters: `id[equals]${slug}` })

    return (
        <div>
            <SozaiList title={Tags.contents[0]?.name} contents={Sozaies.contents} />
            <Pagination currentPage={page} totalCount={Sozaies.totalCount} limit={limit} />
        </div>
    )
}

export default TagDetail