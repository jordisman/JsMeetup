import React from 'react';
import axios from 'axios';
import Form from './Form.jsx';
import AttendeeList from './AttendeeList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      attendees: []
    };
    console.log('this.state.attendees:', this.state.attendees);
    this.getAttendees = this.getAttendees.bind(this);
    this.addAttendee = this.addAttendee.bind(this);
  }

  componentDidMount() {
    this.getAttendees();
  }

  getAttendees() {
    axios.get('/attendees')
      .then(res => {
        this.setState({
          attendees: res.data
        });
        console.log('res.data:', res.data);
      })
      .catch(err => {
        console.log('fail to get data:', err)
      });
  }

  addAttendee(attendee) {
    axios.post('./attendees', attendee)
      .then(() => { // get after post to refresh new data
        this.getAttendees()
      })
  }

  // make sure to pass the addAttendees function down to <Form /> as props
  render() {
    return (
      <div className="main">
      <h1>Js Meet Up</h1>
        <Form className="attendee-form"
          addAttendee={this.addAttendee} />
        <AttendeeList className="attendees"
          attendees={this.state.attendees} />
      </div>
    );
  }
}

export default App;