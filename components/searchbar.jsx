function Search(){
    const info = () => {
        document.getElementById("form-2").style.display = "block"
    }

    
    return(
        <input type="text" className="searchbar" placeholder="Search Employee I.D Number" onChange={handleSearch} value={searchQuery}></input>

    )
}

export default Search