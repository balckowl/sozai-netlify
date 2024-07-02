import { ChevronRight } from "lucide-react"
import SozaiCard from "../SozaiCard/SozaiCard"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "../../components/ui/breadcrumb"

const SozaiList = (
    { title, contents, isHome = false }:
        { title: string, contents: any, isHome?: boolean }
) => {

    return (
        <div>
            <div className="w-[90%] lg:w-[85%] max-w-[1300px] mx-auto py-[40px] lg:py-[70px]">
                {!isHome && <div className="mb-[5px]">
                    <Breadcrumb
                        separator={<ChevronRight size={15} />}
                    >
                        <BreadcrumbList  className="text-[12px]">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>}
                <h2 className="font-bold text-[20px] sm:text-[30px] mb-[20px] flex items-center gap-2">
                    {/* <Tag /> */}
                    <p>{title}</p>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[30px] md:gap-[70px]">
                    {contents?.map((sozai: any) => (
                        <SozaiCard src={sozai.material.url} name={sozai.name} href={sozai.id} key={sozai.id} requestedBy={sozai.requestedBy}/>
                    ))}
                </div>
                {contents?.length == 0 && <div className="bg-[#fdf5ef] py-[6px] px-[6px] text-[15px]">このページにSOZAIはありません。</div>}
            </div>
        </div>
    )
}

export default SozaiList
