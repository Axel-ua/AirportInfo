import React, { useState} from 'react'

const Search = ({ onChange, query }) => {
    return (
        <section className='search'>
            <form>
                <input type='text'
                 className='form-control' 
                 placeholder='Search'
                 value={query}
                 onChange={(e) => onChange(e.target.value)}
                 autoFocus />
            </form>
            
        </section>
    )
}

export default Search
