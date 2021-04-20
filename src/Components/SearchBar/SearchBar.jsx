import React from 'react';
import { Search } from 'react-bootstrap-icons';
import styles from './SearchBarStyle.module.css';



const SearchBar = () => {
    return (
        <div className={styles.SearchBar}>
            <Search/>
            <form style={{display: 'inline-block'}}>
                <input type="text" name="name" className={styles.Search} placeholder="Search.." style={{display: 'inline-block'}}/>
             {/* <input type="submit" value="Submit" /> */}
            </form>
        </div>
    )
}

export default SearchBar
