import React from 'react';
import { connect } from 'react-redux';
import { Repository } from '../../store/github/types';
import { AppState } from '../../store';
import './BookmarkList.css';
import Bookmark from '../Bookmark/Bookmark';

interface Props {
    repositories: Repository[];
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
    repositories: state.github.bookmarkedRepositories,
});

export default connect(mapStateToProps)(BookmarkList);
