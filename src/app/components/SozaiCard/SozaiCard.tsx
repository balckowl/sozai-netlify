import ExportedImage from "next-image-export-optimizer";
import Link from "next/link"

const SozaiCard = ({ src, name, href, requestedBy }: { src: string, name: string, href: string, requestedBy?: string }) => {

    return (
        <div className="col-span-1">
            <Link href={`/sozai/${href}`}>
                <div className="border-2 p-[30px] rounded-[10px] mb-[10px] bg-muted">
                    <ExportedImage src={src} width={500} height={500} alt={name} className="w-full" fetchPriority="high" />
                </div>
            </Link>
            {requestedBy && (
                <p className="text-[12px] text-muted-foreground mb-[5px]">Requested by {requestedBy}</p>
            )}
            <div className="flex items-center justify-between">
                <p className="text-[14px] sm:text-[16px]">{name}</p>
            </div>
        </div>
    )
}

export default SozaiCard
