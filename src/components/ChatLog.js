import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Message from './Message';

class ChatLog extends Component {
  static propTypes = {

    messages: PropTypes.array.isRequired,
    isPresent: PropTypes.bool,
  }

  render() {
    const messages = this.props.messages;

    const messageComponents = messages.map((message) => {
      return (
        <Message
        key={message.timeStamp}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        />
      );
    });

    return(
      <section className='chat-log'>
      {messageComponents}
      </section>
    );
  }
}

export default ChatLog;
