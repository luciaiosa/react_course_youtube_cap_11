import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import VideoList from "../VideoList/VideoList";
import VideoDetail from "../VideoDetail/VideoDetail";
import youtube, { API_DEFAULT_PARAMS } from "../../axios/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = () => {
    this.onSearchTermSubmit("");
  };

  onSearchTermSubmit = async term => {
    console.log(term);
    let response = await youtube.get("/search", {
      params: {
        // spread the default params
        ...API_DEFAULT_PARAMS,
        // add term parameter
        q: term
      }
    });
    console.log(response);
    console.log(response.data.items);

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    console.log("From App!!", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
