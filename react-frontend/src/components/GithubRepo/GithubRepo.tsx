import React from 'react';
import store from '../../store';
import { bookmarkRepository } from '../../store/github/actions';
import { Repository } from '../../store/github/types';
import './GithubRepo.css';

interface Props {
    repository: Repository;
}

const GithubRepo: React.FC<Props> = ({ repository }: Props) => {
    const onClick = () => {
        store.dispatch(bookmarkRepository(repository));
    }

    return (
        <div className='GithubRepo'>
            <button className='GithubRepo-icon' onClick={onClick}>{repository.isBookmarked ? 'Un-Bookmark' : 'Bookmark'}</button>
            <a>{repository.name}</a>
        </div>
    );
};

export default GithubRepo;
