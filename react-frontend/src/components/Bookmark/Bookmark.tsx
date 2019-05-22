import React from 'react';
import { BookmarkedRepository } from '../../store/bookmark/types';
import store from '../../store';
import { unbookmarkRepository } from '../../store/bookmark/actions';
import './Bookmark.css';

interface Props {
    repository: BookmarkedRepository;
}

const Bookmark: React.FC<Props> = ({ repository }) => {
    const onClick = () => {
        store.dispatch(unbookmarkRepository(repository));
    }
    
    return (
        <div className='Bookmark'>
            <a href={repository.githubUrl} title={repository.description}>{repository.name}</a>
            <button onClick={onClick}>Remove</button>
        </div>
    );
}

export default Bookmark;
