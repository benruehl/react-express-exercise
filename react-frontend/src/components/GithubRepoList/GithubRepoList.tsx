import React from 'react';
import { connect } from "react-redux";
import { AppState } from '../../store';
import { Repository } from '../../store/github/types';
import GithubRepo from '../GithubRepo';
import spinner from './spinner.svg';
import './GithubRepoList.css';

export interface Props {
    repositories: Repository[];
    isFetching: boolean;
    errorMessage: string | null;
}

const GithubRepoList: React.FC<Props> = ({ repositories, isFetching, errorMessage }: Props) => {
    return (
        <div className='Github'>
            {isFetching &&
                <img src={spinner} className="Github-loading" alt="logo" />
            }
            {errorMessage &&
                <p>{errorMessage}</p>
            }
            {repositories.length > 0 &&
                <ul className='Github-list'>
                    {repositories.map((el: Repository) => (
                        <li key={el.id} className='Github-repo-item'>
                            <GithubRepo name={el.name}/>
                        </li>
                    ))}
                </ul>
            }
            {repositories.length === 0 && !isFetching &&
                <div className='Github-empty'>
                    No repositories found
                </div>
            }
        </div>
    );
}

const mapStateToProps = (state: AppState) => ({
    repositories: state.github.repositories,
    isFetching: state.github.isFetching,
    errorMessage: state.github.errorMessage,
});
  
export default connect(mapStateToProps)(GithubRepoList);
