import Category from "../Category/Category"

const CategoryList = ({ contents }: { contents: any }) => {

    return (
        <div className="flex gap-2 md:gap-3 flex-wrap">
            {contents?.map((category: any) => (
                <Category name={category.name} src={category.image.url} href={category.id} key={category.id} />
            ))}
        </div>
    )
}

export default CategoryList