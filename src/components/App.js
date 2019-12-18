import React from 'react';
import SearchBar from './SearchBar';
import youtube, {baseParams} from "../APIs/youtube"
import VideoList from './VideoList';
import VideoDetail from "./VideoDetail"


class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }


  onSearchSubmit = async (searchTerm) => {
    const resp = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: searchTerm
      }
    })
    this.setState({
      videos: resp.data.items
    })
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  render(){
    return (
      <div className="App ui container">
        video finder
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;
