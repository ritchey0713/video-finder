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
      videos: resp.data.items,
      selectedVideo: resp.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  componentDidMount(){
    this.onSearchSubmit("Game Leap")
  }

  render(){
    return (
      <div className="App ui container">
        video finder
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
