import React from 'react';
import store from '../../store';
import { bookmarkRepository } from '../../store/github/actions';
import { Repository } from '../../store/github/types';
import './GithubRepo.css';

interface Props {
    repository: Repository;
    name: string;
}

const GithubRepo: React.FC<Props> = ({ repository, name }: Props) => {
    const onClick = () => {
        store.dispatch(bookmarkRepository(repository));
    }

    return (
        <div className='GithubRepo'>
            <button className='GithubRepo-icon' onClick={onClick}>{repository.isBookmarked ? 'Un-Bookmark' : 'Bookmark'}</button>
            <a>{name}</a>
        </div>
    );
};

export default GithubRepo;
