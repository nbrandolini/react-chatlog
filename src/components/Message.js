import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Timestamp from './Timestamp';

class Message extends Component {

  static propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    isPresent: PropTypes.bool,
  }

  isLocal = () => {
    if (this.props.sender === 'Vladimir') {
      return 'chat-entry local';
    }
    return 'chat-entry remote';
  }

  render() {
    const sender = this.props.sender;
    const body = this.props.body;
    const timeStamp = this.props.timeStamp;

    return(
      <article className={this.isLocal()}>
        <p className='entry-name'>{sender}</p>
        <section className='entry-bubble'>
          <p className='entry-body'>{body}</p>
          <Timestamp className='entry-time'
            time={timeStamp}
          />
        </section>
      </article>
    );
  }
}

export default Message;
