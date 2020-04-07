import React, { Component } from 'react';
import axios from 'axios';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json').then((res) => {
      console.log(res.data);
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    return this.state.data.map((quote, index) => {
      return <h1 key={`quote-${index}`}> {quote.quote} {quote.author} </h1>;
    });
  }
}

export default Character;
