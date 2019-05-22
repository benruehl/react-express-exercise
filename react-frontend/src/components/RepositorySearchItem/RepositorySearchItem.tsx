import React from 'react';
import store from '../../store';
import { SearchResultRepository } from '../../store/search/types';
import { bookmarkRepository, unbookmarkRepository } from '../../store/bookmark/actions';
import './RepositorySearchItem.css';

interface Props {
    repository: SearchResultRepository;
}

const RepositorySearchItem: React.FC<Props> = ({ repository }: Props) => {
    const onClick = () => {
        if (!repository.isBookmarked) {
            store.dispatch(bookmarkRepository(repository));
        } else {
            store.dispatch(unbookmarkRepository(repository));
        }
    }

    return (
        <div className='RepositorySearchItem'>
            <button className='RepositorySearchItem-icon' onClick={onClick}>{repository.isBookmarked ? 'Un-Bookmark' : 'Bookmark'}</button>
            <a className='RepositorySearchItem-name' href={repository.githubUrl} title={repository.description}>{repository.name}</a>
            <div className='RepositorySearchItem-icon RepositorySearchItem-counter'>Stars: {repository.starsCount}</div>
            <div className='RepositorySearchItem-icon RepositorySearchItem-counter'>Forks: {repository.forksCount}</div>
        </div>
    );
};

export default RepositorySearchItem;
