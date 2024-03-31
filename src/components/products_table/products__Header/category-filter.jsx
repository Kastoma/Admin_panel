export function FilterCategory({ categories, setCategory, setIsCategory }) {
    return (
        <div className="filter-category_container">
            {categories.map((el, i) => {
                return <button className={'filter-category_btn'} onClick={() => {
                    setCategory(el.value)
                    setIsCategory(true)
                }} key={el.name + i}>{el.name}</button>
            })}
        </div>
    )
}