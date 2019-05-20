import React from 'react';
import './SearchBar.css';

export interface Props {
    onSearch: (searchText: string) => void;
}

class SearchBar extends React.PureComponent<Props> {

    onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'Enter':
                this.props.onSearch(e.currentTarget.value);
                break;
        }
    }

    render() {
        return (
            <input type="text" className="search-bar" onKeyDown={this.onKeyDown} placeholder="search..."/>
        );
    }
}

export default SearchBar;
