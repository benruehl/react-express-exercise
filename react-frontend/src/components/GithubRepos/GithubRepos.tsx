import React from 'react';
import { connect } from "react-redux";
import { Repository, GithubState } from '../../store/github/types';

export interface Props {
    repositories: Repository[];
}

const GithubRepos: React.FC<Props> = ({ repositories }: Props) => {
    return (
        <div>
            <ul>
                {repositories.map((el: Repository) => (
                    <li key={el.id}>
                        {el.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = (state: GithubState) => ({
    repositories: state.repositories,
});
  
export default connect(mapStateToProps)(GithubRepos);
