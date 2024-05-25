import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/app/components/ui/breadcrumb"
import { ChevronRight } from "lucide-react"

const page = () => {
    return (
        <div className="bg-white">
            <div className="w-[95%] md:w-[85%] mx-auto px-[15px] py-[70px]">
                <Breadcrumb
                    separator={<ChevronRight size={15} />}
                >
                    <BreadcrumbList className="text-[12px]">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>利用規約</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h2 className="font-bold text-[25px] sm:text-[30px] mb-[30px] flex items-center gap-2">利用規約</h2>

                <div className="mb-[50px]">
                    <h3 className="text-[20px] font-bold mb-[5px] text-[#aaa]">ご利用について</h3>
                    <div className="bg-gray-100 px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                        <p className="text-[13px] md:text-[16px]">「SOZAI」で配布しているイラスト素材は、コラボイラスト素材を除き、規約の範囲内であれば個人･法人･商用･非商用を問わず無料でご利用いただけます。常識の範囲でご自由にお使いください。</p>
                    </div>
                </div>

                <div className="mb-[50px]">
                    <h3 className="text-[18px] sm:text-[20px] font-bold mb-[5px] text-[#aaa]">利用範囲について</h3>
                    <div className="flex flex-col gap-5">
                        <div className="bg-gray-100 px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                            <h3 className="text-[18px] md:text-[20px] font-bold mb-[10px]">OKな例</h3>
                            <p className="text-[13px] md:text-[16px]">ウェブサイト･メディア、アプリ･ゲーム、SNSのプロフィール･ヘッダー画像、広告、書籍、印刷物、出版物･教材、企画書･資料、YouTube動画･映像、テレビ･CM、パッケージ、配布物、サインデザイン、ロゴなど</p>
                        </div>
                        <div className="bg-gray-100 px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                            <h3 className="text-[18px] md:text-[20px] font-bold mb-[10px]">ダメな例</h3>
                            <p className="text-[13px] md:text-[16px]">イラスト自体が商品・グッズ・コンテンツとなり得る利用、イラストの改変を含む配布・販売行為、著作権譲渡、商標登録、公序良俗に反する・反社会的な利用、性的コンテンツへの利用、選挙運動、政党・宗教関係での利用、素材のイメージを損なう利用、その他当サイトが不適切と判断した利用</p>
                        </div>
                    </div>
                </div>

                <div className="mb-[50px]">
                    <h3 className="text-[20px] font-bold mb-[5px] text-[#aaa]">編集・加工について</h3>
                    <div className="flex flex-col gap-5">
                        <div className="bg-gray-100 px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                            <h3 className="text-[18px] md:text-[20px] font-bold mb-[10px]">OKな例</h3>
                            <p className="text-[13px] md:text-[16px]">サイズの変更、色変更、文字入れ、トリミング、反転、簡単な合成、アニメーションなど</p>
                        </div>
                        <div className="bg-gray-100 px-[20px] md:px-[35px] py-[20px] md:py-[30px] rounded-[5px]">
                            <h3 className="text-[18px] md:text-[20px] font-bold mb-[10px]">ダメな例</h3>
                            <p className="text-[13px] md:text-[16px]">元がわからなくなるほどの過度な改変、当サイトのイラストをベースにして違うイラストの作成、サイトのイメージを損なうイラストの加工</p>
                        </div>
                    </div>
                </div>

                <div className="mb-[50px]">
                    <h3 className="text-[20px] font-bold mb-[5px] text-[#aaa]">著作権</h3>
                    <div className="bg-gray-100 px-[35px] py-[30px] rounded-[5px]">
                        <p className="text-[13px] md:text-[16px]">編集・加工の有無に関わらず、全ての著作権は「SOZAI」が所有しています。クラウドソーシングやクライアントワークなどで著作権の譲渡が必要となる場合はご利用になれませんので、ご注意ください。</p>
                    </div>
                </div>

                <div className="mb-[50px]">
                    <h3 className="text-[20px] font-bold mb-[5px] text-[#aaa]">免責事項</h3>
                    <div className="bg-gray-100 px-[35px] py-[30px] rounded-[5px]">
                        <p className="text-[13px] md:text-[16px]">イラストのダウンロード、利用、編集、加工によって生じたトラブルについては一切責任を負いません。規約は予告なく変更されることがあります。また、過去のイラストの変更や削除も予告なく行われる場合がありますので、ご了承ください。</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page