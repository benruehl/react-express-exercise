import React from 'react';
import './GithubRepo.css';

interface Props {
    name: string;
}

const GithubRepo: React.FC<Props> = ({ name }: Props) => {
    return (
        <div className='GithubRepo'>
            <a>{name}</a>
        </div>
    );
};

export default GithubRepo;
