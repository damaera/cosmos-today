import React, { Component } from 'react'

import axios from 'axios'
import { NASA_API_KEY } from '../constant'

import './Home.css'

class Home extends Component {
  state = {
    data: {},
    loading: false
  }

  componentDidMount () {
    this.setState({ loading: true })
    axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: NASA_API_KEY,
      }
    })
      .then((res) => {
        this.setState({
          data: res.data,
          loading: false,
        })
      })
      .catch((err) => {
        this.setState({ loading: false })
      });
  }

  renderLoading = () => (
    <div className='loading'>Loading...</div>
  )

  renderContent = () => {
    const { title, explanation, hdurl, url } = this.state.data
    return (
      <div className='Home-wrapper'>
        <img
          className='Home-image'
          src={url}
          alt={title}
          />
        <div className='Home-content'>
          <h3 className='Home-title'>{title}</h3>
          <div className='Home-explanation'>{explanation}</div>
        </div>
      </div>
    )
  }
  
  render () {
    return (
      <div className='Home'>
        <div className='wrapper'>
          { this.state.loading
          ? this.renderLoading()
          : this.renderContent() }
        </div>
      </div>
    )
  }
}

export default Home