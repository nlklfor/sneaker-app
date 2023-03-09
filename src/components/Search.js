function Search() {
    return (
        <div className='top_block'>
            <h1 className="content_title">
                All shoes
            </h1>
            <div className='search-block'>
                <img width={12} height={12} alt="search" src='/img/search.svg'></img>
                <input placeholder='Search...'></input>
            </div>
        </div>
    )
}
export default Search;