import React from 'react';
import { Repository } from '../../store/github/types';
import './Bookmark.css';

interface Props {
    repository: Repository;
}

const Bookmark: React.FC<Props> = ({ repository }) => {
    return (
        <div className='Bookmark'>
            <a>{repository.name}</a>
        </div>
    );
}

export default Bookmark;
