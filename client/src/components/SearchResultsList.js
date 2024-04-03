function SearchResultsList({results}){



    const searchResults = results ? results.map((value, id)=>{
        // console.log(value, id, value.id)
        console.log(value)
        console.log(value.classifications[0].genre.name)
        return(
            <a href="#" className='list-group-item list-group-item-action' key={id}>
                <div className='d-flex w-100 justify-content-between'>
                    <h5 class="mb-1">{value.name}</h5>
                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                    <small>{value.classifications[0].genre.name}</small>
                </div>
            </a>
        )
        }) : console.log("nope")
    
    

    return(
        <div className='list-group' style={
            { 
                position: 'absolute', 
                top: '100%', 
                left: 285, width: '50%', 
                backgroundColor: 'white', 
                border: '1px solid black',
                
            }}>
            {searchResults}
            {/* <a href="#" className='list-group-item list-group-item-action' >
                <div className='d-flex w-100 justify-content-between'>
                    <h5 class="mb-1">Name</h5>
                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                    <small>3 days ago</small>
                </div>
            </a> */}
        </div>
    )
}
export default SearchResultsList