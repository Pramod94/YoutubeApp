import React, { Component } from 'react';
import Loading from './Components/Loading/Loading';
import Search from './Components/Search/Search';
import MainVideo from './Components/MainVideo/MainVideo';
import VideoList from './Components/VideoList/VideoList';
import Variables from './variables';
import './Components/VideoList/VideoList.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      search: '',
      result: [],
      mainUrl: ''
    }
  }

  handleInput = (e) => {
    this.setState(
      {
        search: e.target.value
      }
    )
  }

  handleMainUrl = (e) => {
    this.setState(
      {
        mainUrl: e.target.value
      }
    )
  }

  handleResult = () => {
    console.log("Fetching...");
    this.setState(
      {
        result : [],
        isLoading: true
      }
    )
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${Variables.maxResults}&q=${this.state.search}%20world&key=AIzaSyAIaqAnv3dii8NXqWZKW8GAXxiEAmkpo-Y`)
      .then(res => res.json())
      .then(response => {
        const output = response.items.map(res => {
          if(res.id.videoId !== undefined){
            return "https://www.youtube.com/embed/" + res.id.videoId;
          }
         
        })
        this.setState(
          {
            result: output,
            mainUrl: output[0],
            isLoading: false
          }
        )
        console.log(this.state.result);
      })
  }

  render() {
    return (
      <div className="App">

        <Loading isLoading={this.state.isLoading}/>

        <Search
          search={this.state.search}
          handleInput={this.handleInput}
          result={this.handleResult}
        />

        <div style={{ display: 'block' }}>

          <MainVideo main={this.state.mainUrl} />

          <div className="list">
            <VideoList list={this.state.result} changeUrl={this.handleMainUrl} />
          </div>

        </div>

      </div>
    );
  }
}

export default App;
