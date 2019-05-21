import React from 'react';
import { BookmarkedRepository } from '../../store/bookmark/types';
import './Bookmark.css';

interface Props {
    repository: BookmarkedRepository;
}

const Bookmark: React.FC<Props> = ({ repository }) => {
    return (
        <div className='Bookmark'>
            <a>{repository.name}</a>
        </div>
    );
}

export default Bookmark;
