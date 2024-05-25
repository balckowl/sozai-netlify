import Tags from "../Tag/Tag"

const TagList = ({ contents }: { contents: any }) => {

    return (
        <div className="flex gap-2 md:gap-3 flex-wrap px-[5px]">
            {contents?.map((tag: any) => (
                <Tags name={tag.name} href={tag.id} key={tag.id}/>
            ))}
        </div>
    )
}

export default TagList