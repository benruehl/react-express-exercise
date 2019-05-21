import React, { useEffect } from 'react';
import store from '../../store';
import { fetchRepositories, fetchBookmarkedRepositories } from '../../store/github/actions';
import Section from '../Section';
import SearchBar from '../SearchBar';
import GithubRepoList from "../GithubRepoList";
import BookmarkList from '../BookmarkList';
import './App.css';

function startSearch(searchQuery: string) {
  store.dispatch(fetchRepositories(searchQuery));
}

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(fetchRepositories(""));
    store.dispatch(fetchBookmarkedRepositories());
  }); 

  return (
    <div className="App">
      <header className="App-header">
        <Section>
          <div className="App-header-content">
            <h2>
              GitHub Repositories
            </h2>
            <div className="App-search">
              <SearchBar onSearch={startSearch}/>
            </div>
          </div>
        </Section>
      </header>
      <main className="App-main">
        <Section>
          <div className="App-main-content">
            <GithubRepoList/>
            <BookmarkList/>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
