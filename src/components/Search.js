function Search(props) {
    

    return (
        <div className='top_block'>
            <h1 className="content_title">
                {props.searchItem ? `Searhing for: "${props.searchItem}"` : "All shoes"}
            </h1>
            <div className='search-block'>
                <img width={12} height={12} alt="search" src='/img/search.svg'></img>
                <input onChange={props.onChangeInputValue} value={props.searchItem} placeholder='Search...'></input>
                <img onClick={props.onClickClear} className="clear" src='/img/cross.svg' alt='btn-remove'></img>
            </div>
        </div>
    )
}
export default Search;