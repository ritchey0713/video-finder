import React from 'react';
import SearchBar from './SearchBar';
import youtube, {baseParams} from "../APIs/youtube"


class App extends React.Component {
  onSearchSubmit = (searchTerm) => {
    youtube.get('/search', {
      params: {
        ...baseParams,
        q: searchTerm
      }
    })
  }

  render(){
    return (
      <div className="App ui container">
        video finder
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
