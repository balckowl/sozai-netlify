import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/app/components/ui/breadcrumb"
import { ChevronRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'SOZAI | SOZAIについて',
    description: 'カラフルな差し色が特徴の高品質フリーイラスト素材サイト。どんな場面でも合わせやすい素材。多様な形式でのダウンロードが可能。',
    openGraph: {
        title: 'SOZAI | SOZAI一覧',
        description: 'カラフルな差し色が特徴の高品質フリーイラスト素材サイト。どんな場面でも合わせやすい素材。多様な形式でのダウンロードが可能。',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
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

const page = () => {
    return (
        <div>
            <div className="w-[90%] lg:w-[85%] max-w-[1300px] mx-auto py-[40px] lg:py-[70px]">
                <Breadcrumb
                    separator={<ChevronRight size={15} />}
                >
                    <BreadcrumbList className="text-[10px] sm:text-[12px]">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>SOZAIについて</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h2 className="font-bold text-[22px] sm:text-[30px] mb-[30px] flex items-center gap-2">SOZAIについて</h2>

                <div className="mb-[50px]">
                    <h3 className="text-[18px] font-bold mb-[5px] text-[#aaa]">SOZAIについて</h3>
                    <div className="bg-muted px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                        <p className="text-[13px] md:text-[16px]">
                            「SOZAI」は、カラフルなアクセントが特徴の高品質なフリーイラストを無料でダウンロードできるサイトです。さまざまなシーンにマッチするイラストを豊富に取り揃えています。さらに、欲しいイラストが見つからない場合は、
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4NYZMUFOzpNHSKoBJ7_cVoz2SskgKeAWwl7W0Kqr2FHt4ow/viewform" className="border-b-[1px] border-red-300 text-red-300" target="_blank">イラストリクエスト</a>
                            も受け付けていますので、ぜひご利用ください。
                        </p>
                    </div>
                </div>

                <div className="mb-[50px]">
                    <h3 className="text-[18px] font-bold mb-[5px] text-[#aaa]">イラストリクエストについて</h3>
                    <div className="bg-muted px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                        <p className="text-[13px] md:text-[16px]">
                            「SOZAI」では、<a href="https://docs.google.com/forms/d/e/1FAIpQLSf4NYZMUFOzpNHSKoBJ7_cVoz2SskgKeAWwl7W0Kqr2FHt4ow/viewform" className="border-b-[1px] border-red-300 text-red-300" target="_blank">イラストリクエスト</a>を受け付けています。欲しいイラストのタイトルと内容をお書きください。リクエストを採用させていただいた際に、ニックネームを記載していただいていた場合は、サイトに掲載いたします。
                        </p>
                    </div>
                </div>

                <div className="mb-[50px]">
                    <h3 className="text-[18px] font-bold mb-[5px] text-[#aaa]">皆様へのお願い</h3>
                    <div className="bg-muted px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                        <p className="text-[13px] md:text-[16px]">
                            運営一同、「SOZAI」をより多くの方に使っていただきたいと願っています。そのため、このサイトをブログで紹介したり、X（旧Twitter）などでシェアしていただけると大変助かります。また、何かご質問やお問い合わせがありましたら、
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdcERTBs7fiL-pnQZo3gTykis77ECGtn6_nCpIuFtoQKXsAXA/viewform" className="border-b-[1px] border-red-300 text-red-300" target="_blank">こちら</a>からお願いいたします。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
