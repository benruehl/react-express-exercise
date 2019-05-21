import React from 'react';
import { connect } from 'react-redux';
import { BookmarkedRepository } from '../../store/bookmark/types';
import { AppState } from '../../store';
import Bookmark from '../Bookmark/Bookmark';
import './BookmarkList.css';

interface Props {
    repositories: BookmarkedRepository[];
}

const BookmarkList: React.FC<Props> = ({ repositories }) => {
    return (
        <div className='Bookmarks'>
            <header className='Bookmarks-header'>
                <h3 className='Bookmarks-header-title'>Bookmarks</h3>
            </header>
            <ul className='Bookmarks-list'>
                {repositories.map(el => (
                    <li>
                        <Bookmark repository={el}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = (state: AppState) => ({
    repositories: state.bookmark.repositories,
});

export default connect(mapStateToProps)(BookmarkList);
