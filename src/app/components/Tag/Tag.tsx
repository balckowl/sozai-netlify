import { Tag } from "lucide-react"
import Link from "next/link"

const Tags = ({ name, href }: { name: string, href: string }) => {
  return (
    <Link href={`/tag/${href}`}>
      <div className="flex gap-1 items-center">
        <Tag width={18} height={18} />
        <p className="text-[14px]">{name}</p>
      </div>
    </Link>
  )
}

export default Tags