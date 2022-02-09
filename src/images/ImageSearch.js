import React from 'react';
import './ImageSearch.css';
function ImageSearch(props) {
return (  
        <div className='Container'>   
                <form onSubmit={props.handleGetRequest}>
                <input className='inp' type="text" name="searchValue" autoComplete='off'placeholder='Search for images...' required/>
                <button className='btn'>Search</button>
            </form>
            
        </div>
    );
}

export default ImageSearch;