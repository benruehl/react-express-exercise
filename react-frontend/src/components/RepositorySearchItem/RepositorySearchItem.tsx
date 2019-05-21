import React from 'react';
import store from '../../store';
import { SearchResultRepository } from '../../store/search/types';
import { bookmarkRepository } from '../../store/bookmark/actions';
import './RepositorySearchItem.css';

interface Props {
    repository: SearchResultRepository;
}

const RepositorySearchItem: React.FC<Props> = ({ repository }: Props) => {
    const onClick = () => {
        store.dispatch(bookmarkRepository(repository));
    }

    return (
        <div className='RepositorySearchItem'>
            <button className='RepositorySearchItem-icon' onClick={onClick}>{repository.isBookmarked ? 'Un-Bookmark' : 'Bookmark'}</button>
            <a>{repository.name}</a>
        </div>
    );
};

export default RepositorySearchItem;
