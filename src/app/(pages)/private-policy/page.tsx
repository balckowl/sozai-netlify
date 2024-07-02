import { Metadata } from "next"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
    title: 'SOZAI | プライバシーポリシー',
    description: 'カラフルな差し色が特徴の高品質フリーイラスト素材サイト。どんな場面でも合わせやすい素材。多様な形式でのダウンロードが可能。',
    openGraph: {
        title: 'SOZAI | SOZAI一覧',
        description: 'カラフルな差し色が特徴の高品質フリーイラスト素材サイト。どんな場面でも合わせやすい素材。多様な形式でのダウンロードが可能。',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/guide`,
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
                            <BreadcrumbPage>プライバシーポリシー</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h2 className="font-bold text-[22px] sm:text-[30px] mb-[30px] flex items-center gap-2">プライバシーポリシー</h2>

                <div className="mb-[50px]">
                    <h3 className="text-[18px] font-bold mb-[5px] text-[#aaa]">個人情報の取り扱いについて</h3>
                    <div className="bg-muted px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                        <p className="text-[13px] md:text-[16px]">
                            当サイトでは、お預かりした個人情報を適切に管理し、サービス提供やご連絡、お問い合わせへの返信のために利用いたします。また、法令に基づき開示が必要な場合を除き、個人情報を第三者に開示することはありません。
                        </p>
                    </div>
                </div>

                <div className="mb-[50px]">
                    <h3 className="text-[18px] font-bold mb-[5px] text-[#aaa]">外部コンテンツについて</h3>
                    <div className="bg-muted px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                        <p className="text-[13px] md:text-[16px]">当サイトからリンクやバナー等によって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。</p>
                    </div>
                </div>

                <div className="mb-[50px]">
                    <h3 className="text-[18px] font-bold mb-[5px] text-[#aaa]">掲載されている広告について</h3>
                    <div className="bg-muted px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                        <p className="text-[13px] md:text-[16px]">
                            当サイトでは、第三者が提供する広告サービス「Googleアドセンス」を利用しています。このような広告配信事業者は、ユーザーの興味に合わせた商品やサービスの広告を表示するために、当サイトや他のサイトへのアクセス情報をCookieを通じて収集することがあります（氏名、住所、メールアドレス、電話番号は含まれません）。また、Googleアドセンスに関する詳細や、これらの情報が広告配信事業者によって使用されないようにする方法については、Googleの「<a href="https://policies.google.com/technologies/ads?gl=jp" className="border-b-[1px] border-red-300 text-red-300" target="_blank">ポリシーと規約</a>」をご確認ください。
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-[18px] font-bold mb-[5px] text-[#aaa]">アクセス解析ツールについて</h3>
                    <div className="bg-muted px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                        <p className="text-[13px] md:text-[16px]">
                            当サイトでは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を使用しています。Googleアナリティクスは、トラフィックデータを収集するためにCookieを利用します。収集されるトラフィックデータは匿名化されており、個人を特定することはありません。Cookieの設定を変更することで、データ収集を無効にすることも可能ですので、お使いのブラウザの設定をご確認ください。詳細については、「<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" className="border-b-[1px] border-red-300 text-red-300" target="_blank">Google アナリティクス利用規約</a>」をご参照ください。
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page
