import React from 'react';
import { connect } from "react-redux";
import { AppState } from '../../store';
import { SearchResultRepository } from '../../store/search/types';
import RepositorySearchItem from '../RepositorySearchItem';
import spinner from './spinner.svg';
import './RepositorySearchList.css';

export interface Props {
    repositories: SearchResultRepository[];
    isFetching: boolean;
    errorMessage: string | null;
}

const RepositorySearchList: React.FC<Props> = ({ repositories, isFetching, errorMessage }: Props) => {
    return (
        <div className='RepositorySearchList'>
            {isFetching &&
                <img src={spinner} className="RepositorySearchList-loading" alt="logo" />
            }
            {errorMessage &&
                <p>{errorMessage}</p>
            }
            {repositories.length > 0 &&
                <ul className='RepositorySearchList-list'>
                    {repositories.map((el: SearchResultRepository) => (
                        <li key={el.id} className='RepositorySearchList-repo-item'>
                            <RepositorySearchItem repository={el}/>
                        </li>
                    ))}
                </ul>
            }
            {repositories.length === 0 && !isFetching &&
                <div className='RepositorySearchList-empty'>
                    No repositories found
                </div>
            }
        </div>
    );
}

const mapStateToProps = (state: AppState) => ({
    repositories: state.search.repositories,
    isFetching: state.search.isFetching,
    errorMessage: state.search.errorMessage,
});
  
export default connect(mapStateToProps)(RepositorySearchList);
