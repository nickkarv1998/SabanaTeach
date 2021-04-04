import React from 'react';
import { Search } from 'react-bootstrap-icons';
import './SearchBarStyle.css';


const SearchBar = () => {
    return (
        <div className="SearchBar">
            <Search/>
            <form style={{display: 'inline-block'}}>
                <input type="text" name="name" className="Search" placeholder="Search.." style={{display: 'inline-block'}}/>
             {/* <input type="submit" value="Submit" /> */}
            </form>
        </div>
    )
}

export default SearchBar
