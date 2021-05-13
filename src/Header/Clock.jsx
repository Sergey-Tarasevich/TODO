import React from 'react';

// create class component Clock
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tickTack(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tickTack() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="Clock">
        <div>TODO React</div>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
