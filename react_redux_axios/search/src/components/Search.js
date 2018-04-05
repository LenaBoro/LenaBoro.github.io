import React from 'react';
import PropTypes from 'prop-types';
import  './../App.css';

const Search = ({ name, onChange, onSave }) => {
    return (
        <div className="container">
            <form onSubmit={onSave}>
                    <input
                        className="search-bar"
                        type="text"
                        placeholder = "Search"
                        value={name}
                        onChange={onChange}/>
                    <button type="submit">
                        <i id="filtersubmit" className="fa fa-search"/>
                    </button>
            </form>
        </div>
    );
};

Search.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default Search;