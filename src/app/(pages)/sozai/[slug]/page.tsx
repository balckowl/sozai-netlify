import DownloadBtn from "@/app/components/DownloadBtn/DownloadBtn"
import SozaiHeader from "@/app/components/SozaiHeader/SozaiHeader"
import { Button } from "@/components/ui/button"
import { Sozai, getList, getSozaiDetail } from "@/libs/microcms"
import { faFacebook, faLine, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {

    const { slug } = params
    const SozaiDetail = await getSozaiDetail(slug)

    return {
        title: `SOZAI | ${SozaiDetail.name}`,
        description: 'AIで作ったフリー素材。どんな場面でも合わせやすい素材。PNG、JPG、WEBP、SVG形式でのダウンロードが可能。',
        openGraph: {
            title: `SOZAI | ${SozaiDetail.name}`,
            description: 'AIで作ったフリー素材。どんな場面でも合わせやすい素材。PNG、JPG、WEBP、SVG形式でのダウンロードが可能。',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/sozai/${SozaiDetail.id}`,
            siteName: 'SOZAI',
            images: [
                {
                    width: '700',
                    height: '700',
                    url: `${SozaiDetail.material.url}`
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
    const limit = 10;
    let allSozaies: Sozai[] = []
    let totalCount = 0;

    do {
        const response = await getList({ limit: limit, offset: offset });
        allSozaies = allSozaies.concat(response.contents)
        totalCount = response.totalCount;
        offset += limit;
    } while (allSozaies.length < totalCount)

    return allSozaies.map(sozai => ({
        slug: sozai.id
    }))
}

const SozaiDetail = async ({ params }: { params: { slug: string } }) => {

    const { slug } = params

    const SozaiDetail = await getSozaiDetail(slug)

    return (
        <div>
            <div className="w-[90%] lg:w-[85%] mx-auto py-[40px] lg:py-[70px]">
                <SozaiHeader name={SozaiDetail.name} category={SozaiDetail.category} tags={SozaiDetail.tags} id={SozaiDetail.id} />
                <div className="grid lg:grid-cols-2 grid-rows-4 gap-[15px] lg:gap-x-[40px] lg:gap-y-[0px] mb-[20px]">
                    <div className="order-1 col-span-1 row-span-4">
                        <div className="p-[30px] border-2 rounded-xl bg-muted">
                            <Image src={SozaiDetail.material.url} width={700} height={700} alt="" className="w-full" />
                        </div>
                    </div>
                    <Link className="order-3 lg:order-2 col-span-1 row-span-3 bg-[#FCF5EF] flex justify-center items-center h-full lg:h-full rounded-[10px] duration-300 hover:translate-y-1 cursor-pointer" href="https://docs.google.com/forms/d/e/1FAIpQLSf4NYZMUFOzpNHSKoBJ7_cVoz2SskgKeAWwl7W0Kqr2FHt4ow/viewform" target="_blank">
                        <Image src="/post.png" width={500} height={400} alt="" className="w-full rounded-[10px] h-[300px] object-cover" />
                    </Link>
                    <DownloadBtn url={SozaiDetail.material.url} name={SozaiDetail.name} />
                    <div className="lg:order-4 order-1 lg:mt-[15px]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <ul className="flex gap-2">
                                        <li>
                                            <Button asChild variant="ghost" size="icon">
                                                <Link target="_blank" href={`http://twitter.com/share?url=${process.env.NEXT_PUBLIC_SITE_URL}/sozai/${SozaiDetail.id}&text=${SozaiDetail.name}&via=SOZAI2024`}>
                                                    <FontAwesomeIcon icon={faXTwitter} width="20px" height="20px" />
                                                </Link>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button asChild variant="ghost" size="icon">
                                                <Link target="_blank" href={`http://www.facebook.com/share.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/sozai/${SozaiDetail.id}`}>
                                                    <FontAwesomeIcon icon={faFacebook} width="20px" height="20px" />
                                                </Link>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button asChild variant="ghost" size="icon">
                                                <Link target="_blank" href={`https://social-plugins.line.me/lineit/share?url=${process.env.NEXT_PUBLIC_SITE_URL}/sozai/${SozaiDetail.id}`}>
                                                    <FontAwesomeIcon icon={faLine} width="20px" height="20px" />
                                                </Link>
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {SozaiDetail.requestedBy && (
                                <div className="text-[13px] text-muted-foreground">Requested by {SozaiDetail.requestedBy}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SozaiDetail