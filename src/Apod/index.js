import React, { Component } from 'react'

import axios from 'axios'
import { NASA_API_KEY } from '../constant'

import './Apod.css'

class Apod extends Component {
  state = {
    data: {},
    loading: false,
    error: null
  };

  componentDidMount() {
    let params = { api_key: NASA_API_KEY };
    if (this.props.match.params.date) {
      const { date } = this.props.match.params;
      if (this.checkDate(date)) {
        params.date = date;
        this.fetchApod(params);
      } else {
        this.props.router.push("/");
      }
    }
  }

  checkDate = date => {
    if (!isNaN(Date.parse(date))) {
      return true;
    }
    return false;
  };

  fetchApod = params => {
    this.setState({ loading: true });

    axios
      .get("https://api.nasa.gov/planetary/apod", { params })
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false, error });
      });
  };

  renderLoading = () => <div className="loading">Loading...</div>;

  renderImage = (url, title) => <img className="Apod-image" src={url} alt={title} />;
  renderVideo = (url) => <iframe className="Apod-video" src={url} />

  renderContent = () => {
    console.log(this.state.data)
    const { title, explanation, hdurl, url, media_type } = this.state.data;
    return (
      <div className="Apod-wrapper">
        <div className="Apod-media">
          { media_type == 'image' && this.renderImage(url, title) }
          { media_type == 'video' && this.renderVideo(url) }
        </div>
        <div className="Apod-content">
          <h3 className="Apod-title">{title}</h3>
          <div className="Apod-explanation">{explanation}</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="Apod">
        <div className="wrapper">
          {this.state.loading ? this.renderLoading() : this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Apod